const notas = [1, 2, 3, 4, 5];
const total_clientes = [2, 15, 18, 25, 40];

let soma_produtos = 0;
let total_clientes_atendidos = 0;
 
notas.forEach((nota, index) => {
    soma_produtos += nota * total_clientes[index];
    total_clientes_atendidos += total_clientes[index];
 });

const media_avaliacao = soma_produtos / total_clientes_atendidos;

console.log("A nota média do restaurante é:", media_avaliacao.toFixed(2));