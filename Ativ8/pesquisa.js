const totalPessoas = 45;
let idade = [];
let sexo = [];
let opiniao = [];
let somaIdade = 0;
let qtdPessimo = 0;
let qtdOtimoBom = 0;
let homens = 0;
let mulheres = 0;
let outros = 0;

for(i = 0; i < 4; i++){
    let s;
    let id;
    let o;
    s = prompt("Qual o seu gênero? Digite M para mulher e H para homem").toUpperCase();
    if (s === "H") {
        homens++;
    } else if (s === "M") {
        mulheres++;
    } else {
        outros++;
    }
    sexo.push(s);
    id = prompt("Qual a sua idade?");
    idade.push(Number(id));
    o = prompt("O que você achou do filme? Digite 4 para ótimo, 3 para bom, 2 para regular e 1 para péssimo");
    if (o == "1") {
        qtdPessimo++; 
    }
    if (o === "4" || o === "3") {
        qtdOtimoBom++;
    }
    opiniao.push(o);
    
}

idade.forEach(val => somaIdade += Number(val));
let mediaIdade = somaIdade / idade.length;

let maiorIdade = idade[0];
let menorIdade = idade[0];
for (let i = 0; i < idade.length; i++) {
    if (idade[i] > maiorIdade) {
        maiorIdade = idade[i];
    }
    if (idade[i] < menorIdade) {
        menorIdade = idade[i];
    }
}

let porcentagem = (qtdOtimoBom / totalPessoas) * 100;

function mostrarResultados(){
    document.getElementById('resMedia').innerText = parseInt(mediaIdade);
    document.getElementById('resMaior').innerText = maiorIdade
    document.getElementById('resPessimo').innerText = qtdPessimo;
    document.getElementById('resPorcentagem').innerText = (porcentagem).toFixed(2) + "%";
    
    document.getElementById('resH').innerText = homens;
    document.getElementById('resM').innerText = mulheres;
    document.getElementById('resO').innerText = outros;

}

mostrarResultados();
