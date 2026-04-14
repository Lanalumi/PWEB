let escolhaUser;
const min = 1;
const max = 4;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }
    
    let escolhaPc = getRandomInt(min,max);
    escolhaUser = prompt("Digite 1 para pedra, 2 para papel e 3 para tesoura");
    console.log("a escolha do pc foi: " + escolhaPc)    

if (escolhaUser == escolhaPc) {
    alert("Empate!");
} 
else if (
    (escolhaUser == 1 && escolhaPc == 3) || 
    (escolhaUser == 2 && escolhaPc == 1) || 
    (escolhaUser == 3 && escolhaPc == 2)
) {
    alert("Usuário ganhou!");
} 
else {
    alert("Computador ganhou!");
}