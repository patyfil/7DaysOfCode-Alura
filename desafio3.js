alert("Qual caminho você vai seguir na programação?");
const nome = prompt("Qual o seu nome ?");
let area = prompt(
  "Olá " +
    [nome] +
    ", você quer seguir para a área de Front-End ou Back-End? \nDigite 1 para Front-End ou 2 para Back-End."
);

//Front-End
if (area == 1) {
  area = "Front-End";

  let frontend = prompt(
    "Em Front-End, você quer aprender \nReact ou aprender Vue? \nSelecione 1 para React e 2 para Vue"
  );
  if (frontend == 1) {
    alert("Parabéns, você escolheu React");
  } else if (frontend == 2) {
    alert("Parabéns, você escolheu Vue");
  } else {
    alert("opção inválida!");
  }
}

//Back-End
else if (area == 2) {
  area = "Back-End";

  let backend = prompt(
    "Em Back-End, você quer aprender \nC# ou aprender Java? \nSelecione 1 para C# e 2 para Java"
  );
  if (backend == 1) {
    alert("Parabéns, você escolheu C#");
  } else if (backend == 2) {
    alert("Parabéns, você escolheu Java");
  } else {
    alert("opção inválida!");
  }
} else {
  alert("opção inválida!");
}

//Fullstack
let seguir = prompt(
  "Você quer seguir se especializando na área escolhida (Digite 1) ou \nseguir se desenvolvendo para se tornar Fullstack (Digite 2)."
);
if (seguir == 1) {
  alert("Muito sucesso na sua carreira de " + area + "!");
} else if (seguir == 2) {
  alert("Muito sucesso na sua carreira de Fullstack");
} else {
  alert("opção inválida!");
}

// Outras Tecnologias
var listaTecnologias = [];

let opcao = prompt(
  "Você gostaria de se especializar ou de conhecer alguma outra tecnologia? \nDigite 1 para responder ou 2 para Sair"
);
if (opcao == 2) {
  alert("Até mais!! ");
} else {
  while (opcao == 1) {
    tecnologia = prompt(
      "Quais as tecnologias você gostaria de se especializar ou de conhecer? \nResponda uma de cada vez"
    );
    let aprender = prompt(
      "Você quer apreender mais alguma tecnologia? \nDigite 1 para responder ou 2 para Sair"
    );
    if (aprender == 2) {
      alert("Até mais!! ");
      break;
    } else {
      listaTecnologias.push(tecnologia);
      alert("Você digitou a seguinte tecnologia " + [listaTecnologias]);
    }
  }
}
