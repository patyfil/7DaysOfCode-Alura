// ****************************** NÚMERO RANDÔMICO ******************************

const nrRand = Math.floor(Math.random() * (10 - 0 + 1) + 0);
let chute = "";
let acertou = false;


for (let contador = 1; contador < 4; contador++) {
    chute = prompt("Tente adivinhar o número de 0 a 10: \nVocê tem 3 Tentativas, essa é sua " + [contador] + "ª");
    // Enquanto o chute não for um valor de 0 a 10
    while (10 < chute || chute < 0 || chute == "") {
        alert("O número deve ser de 0 a 10, tente novamente!")
        chute = prompt("Tente adivinhar o número de 0 a 10: \nVocê tem 3 Tentativas, essa é sua " + [contador] + "ª");
    }
    // Se chute for IGUAL o número sorteado
    if (chute == nrRand) {
        alert(`Parabéns, você acertou! O número era ${nrRand}.`);
        acertou = true;
        break;
    }
    // Se chute for MENOR que o número sorteado
    else if (chute < nrRand) {
        alert("Errou! é maior que: " + [chute])
    }
    // Se chute for MAIOR que o número sorteado
    else if (chute > nrRand) {
        alert("Errou! é menor que: " + [chute])
    }
    alert("Essa foi sua " + [contador] + "ª tentativa ");
}
{/* Se perder as 3 tentativas */}

if (!acertou) {
    alert("O número sorteado era: " + [nrRand] + " \nvocê atingiu as 3 tentativas!")
}


// ****************************** NÚMERO FIXO ******************************
// const nrFixo = 7;
// let chute = "";
// let acertou = false;

// for (let contador = 1; contador < 4; contador++) {
//   chute = prompt(
//     "Tente adivinhar o número de 0 a 10: \nVocê tem 3 Tentativas, essa é sua " +
//       [contador] +
//       "ª"
//   );
//   // Enquanto o chute não for um valor de 0 a 10
//   while ((10 < chute) || (chute < 0) || (chute == "")) {
//     alert("O número deve ser de 0 a 10, tente novamente!");
//     chute = prompt(
//       "Tente adivinhar o número de 0 a 10: \nVocê tem 3 Tentativas, essa é sua " +
//         [contador] +
//         "ª"
//     );
//   }
//   // Se chute for IGUAL o número fixo
//   if (chute == nrFixo) {
//     alert(`Parabéns, você acertou! O número era ${nrFixo}.`);
//     acertou = true;
//     break;
//   }
//   // Se errar o chute
//   alert("Errou! Essa foi sua " + [contador] + "ª tentativa ");
// }
// // Se perder as 3 tentativas
// if (!acertou) {
//   alert(`Infelizmente, você não acertou. O número era ${nrFixo}!`);
// }