let frutas = [];
let laticinios = [];
let congelados = [];
let doces = [];
let outros = [];
let adicionar = "1";

while (adicionar != "4") {
  if (
    frutas.length === 0 &&
    laticinios.length === 0 &&
    congelados.length === 0 &&
    doces.length === 0 &&
    outros.length === 0
  ) {
    adicionar = prompt(
      " ************************ LISTA DE COMPRAS ************************ \n\nVocê deseja adicionar uma comida na lista de compras? \nResponda: \nDigite 1 para SIM \nDigite 4 para SAIR."
    );
  } else {
    adicionar = prompt(
      " ********************** MENU LISTA DE COMPRAS ********************** \n\nEscolha uma opção: \n\n1 para ADICIONAR \n2 para REMOVER \n3 para EXIBIR a lista \n4 para SAIR."
    );
  }

  while (
    // adicionar != "sim" &&
    // adicionar != "não" &&
    adicionar != "1" && // ADICIONAR
    adicionar != "2" && // REMOVER
    adicionar != "3" && // LISTAR
    adicionar != "4" // SAIR
  ) {
    //enquanto o texto lido for diferente do MENU
    alert(" ********************** OPÇÃO INVÁLIDA! ********************** ");
    adicionar = prompt(
      " ********************** MENU LISTA DE COMPRAS ******************** \n\nEscolha uma opção \nDigite: \n\n1 para ADICIONAR \n2 para REMOVER \n3 para EXIBIR a lista \n4 para SAIR."
    );
  }

  if (adicionar === "3") {
    // LISTAR
    //se o texto lido for "3", sair do while
    alert(
      `Sua lista de compras:\nFrutas: ${frutas}\nLaticínios: ${laticinios}\nCongelados: ${congelados}\nDoces: ${doces}\nOutros: ${outros}`
    );
  }

  if (adicionar === "4") {
    // SAIR
    //se o texto lido for "4", sair do while
    alert("Volte Sempre!");
    break;
  }

  if (adicionar === "1") {
    // ADICIONAR
    let comida = prompt("Qual comida você deseja inserir?");
    let categoria = prompt(
      "Qual a categoria do produto? \n1 - Fruta, \n2 - Laticínios, \n3 - Congelados, \n4 - Doces, \n5 - Outros."
    );
    if (categoria === "1") {
      frutas.push(comida);
    } else if (categoria === "2") {
      laticinios.push(comida);
    } else if (categoria === "3") {
      congelados.push(comida);
    } else if (categoria === "4") {
      doces.push(comida);
    } else if (categoria === "5") {
      outros.push(comida);
    } else {
      alert("Essa categoria não existe.");
    }
  } else if (adicionar === "2") {
    // REMOVER
    if (
      frutas.length === 0 &&
      laticinios.length === 0 &&
      congelados.length === 0 &&
      doces.length === 0 &&
      outros.length === 0
    ) {
      //se a lista estiver vazia
      alert(`A lista está vazia!`);
    } else {
      //se a lista não estiver vazia
      remover = prompt(
        `Sua lista de compras:\nFrutas: ${frutas}\nLaticínios: ${laticinios}\nCongelados: ${congelados}\nDoces: ${doces}\nOutros: ${outros} \n\nQual produto você deseja remover?`
      );

      if (frutas.indexOf(remover) != -1) {
        frutas.splice(frutas.indexOf(remover), 1);
        alert(`O item ${remover} foi removido com sucesso!`);
      } else if (laticinios.indexOf(remover) != -1) {
        laticinios.splice(laticinios.indexOf(remover), 1);
        alert(`O item ${remover} foi removido com sucesso!`);
      } else if (congelados.indexOf(remover) != -1) {
        congelados.splice(congelados.indexOf(remover), 1);
        alert(`O item ${remover} foi removido com sucesso!`);
      } else if (doces.indexOf(remover) != -1) {
        doces.splice(doces.indexOf(remover), 1);
        alert(`O item ${remover} foi removido com sucesso!`);
      } else if (outros.indexOf(remover) != -1) {
        outros.splice(outros.indexOf(remover), 1);
        alert(`O item ${remover} foi removido com sucesso!`);
      } else {
        alert(`Não foi possível encontrar o item dentro da lista!`);
      }
    }
  }
}
alert(
  `Sua lista de compras:\nFrutas: ${frutas}\nLaticínios: ${laticinios}\nCongelados: ${congelados}\nDoces: ${doces}\nOutros: ${outros}`
);
