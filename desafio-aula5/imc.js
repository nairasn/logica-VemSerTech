let peso = parseFloat(prompt("Informe seu peso em kg: Ex: 70.5"));
let altura = parseFloat(prompt("Informe sua altura em metros: Ex: 1.82"));

let imc = peso / (altura ** 2);

let classifica;
if (imc < 18.5) {
    classifica = "Abaixo do peso";
} else if (imc >= 18.5 && imc < 24.9) {
    classifica = "Peso normal";
} else if (imc >= 25 && imc < 29.9) {
    classifica = "Sobrepeso";
} else if (imc > 29.9) {
    classifica = "Obesidade";
} else {
    classifica = "Insira dados válidos.";
}

console.log("Seu IMC é " + imc.toFixed(2) + ". Você está classificado como: " + classifica + ".");
