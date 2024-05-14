// Função para calcular a taxa de engajamento
function calcularTaxaEngajamento(direct, stories, comentarios, compartilhamentos, salvamentos, curtidas) {
    // Calcular o total de interações
    const totalInteracoes = direct + stories + comentarios + compartilhamentos + salvamentos + curtidas;
    
    // Calcular a taxa de engajamento
    const taxaEngajamento = (totalInteracoes / seguidores) * 100;
    
    return taxaEngajamento;
}

// Exemplo de uso da função
const direct = 50;
const stories = 100;
const comentarios = 80;
const compartilhamentos = 30;
const salvamentos = 70;
const curtidas = 200;

// Número de seguidores da conta
const seguidores = 10000;

// Calcular a taxa de engajamento
const taxaEngajamento = calcularTaxaEngajamento(direct, stories, comentarios, compartilhamentos, salvamentos, curtidas);

console.log("Taxa de Engajamento: " + taxaEngajamento.toFixed(2) + "%");