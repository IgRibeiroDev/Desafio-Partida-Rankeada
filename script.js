function resultado(vitoria, derrota) {
  return vitoria - derrota;
}

while (true) {
let rank = 0;
let vitoria = parseInt(prompt("Quantidade de vitórias: "));
let derrota = parseInt(prompt("Quantidade de derrotas: "));
let resultadoFinal = resultado(vitoria, derrota);

if (resultadoFinal < 0) {
  rank = "Iniciante, treine mais para obter vitórias.";
} else if (resultadoFinal <= 10) {
  rank = "Ferro";
} else if (resultadoFinal < 21) {
  rank = "Bronze";
} else if (resultadoFinal < 51) {
  rank = "Prata";
} else if (resultadoFinal < 81) {
  rank = "Ouro";
} else if (resultadoFinal < 91) {
  rank = "Diamante";
} else if (resultadoFinal < 101) {
  rank = "Lendário";
} else {
  rank = "Imortal";
}

alert(
  `O Herói tem saldo de ${resultadoFinal} vitórias e está no nivel ${rank}.`
);

let opcao = parseInt(prompt('Deseja continuar? [1]SIM / [2]NÃO'))
if (opcao === 2) {
    break;
};
};