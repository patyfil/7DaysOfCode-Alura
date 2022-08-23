let frutas = [];
let laticinios = [];
let congelados = [];
let doces = [];
let outros = [];

let adicionarProduto = prompt(
  "Você deseja adicionar algum produto na sua lista de compras? \nDigite 1 para SIM ou 2 para NÃO."
);
while (adicionarProduto != 1 && adicionarProduto != 2) {
  adicionarProduto = prompt("Opção Inválida! Digite 1 para SIM ou 2 para NÃO.");
}
if (adicionarProduto == 1) {
  while (adicionarProduto == 1) {
    let nome = prompt(
      "Qual produto quer adicionar? \n(*Digite um de cada vez)"
    );
    switch (
      prompt(
        "Qual a categoria do produto? \n1 - Fruta, \n2 - Laticínios, \n3 - Congelados, \n4 - Doces, \n5 - Outros."
      )
    ) {
      case "1":
        frutas.push(nome);
        break;
      case "2":
        laticinios.push(nome);
        break;
      case "3":
        congelados.push(nome);
        break;
      case "4":
        doces.push(nome);
        break;
      case "5":
        outros.push(nome);
        break;
      default:
        alert("Categoria não existe!");
    }
    adicionarProduto = prompt(
      "Adicionar mais produtos? \nDigite 1 para SIM ou 2 para NÃO."
    );
    while (adicionarProduto != 1 && adicionarProduto != 2) {
      adicionarProduto = prompt(
        "Opção Inválida! Digite 1 para SIM ou 2 para NÃO."
      );
    }
  }
  alert(
    "Sua Lista de Compras: \nFrutas: " +
      frutas +
      "\n" +
      "Laticínios: " +
      laticinios +
      "\n" +
      "Congelados: " +
      congelados +
      "\n" +
      "Doces: " +
      doces +
      "\n" +
      "Outros: " +
      outros
  );
}
