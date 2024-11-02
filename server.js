// Importar as dependências necessárias
const express = require('express');
const app = express();
const moment = require('moment'); // Biblioteca para manipular data e hora

// Middleware para permitir que o servidor receba dados em JSON
app.use(express.json());

// Função para calcular a tarifa de acordo com o tempo, km rodado e bandeira
function calcularTarifa(km, tempo, dataHora) {
    let tarifaBaseKm;
    let tarifaTempo = 0.6;
    const bandeirada = 6.00;


    // Verifica se é bandeira 1 ou 2 com base no dia da semana e no horário
    const diaSemana = moment(dataHora).format('dddd').toLowerCase();
    const hora = moment(dataHora).hour();

    // Bandeira 2 aplica-se ao fins de semana, feriados, e de seg a sáb das 20h às 6h
    const bandeira2 = (diaSemana === 'sábado' || diaSemana === 'domingo' || hora >= 20 || hora< 6);

    if (bandeira2) {
        tarifaBaseKm = 5.26;
    } else {
    tarifaBaseKm = 4.10
    }

    // Calcula o custo total da corrida
    const custoKm = km * tarifaBaseKm;
    const custoTempo = tempo * tarifaTempo;
    const tarifaTotal = custoKm + custoTempo + bandeirada;

    return tarifaTotal;

}

app.post('/calcular-tarifa', (req, res) => {
    //Extrai os parâmetros do corpo da requisição
    const {km, tempo, dataHora} = req.body;

    //Verifica se todos os parâmetros necessários foram fornecidos
    if (!km || !tempo || !dataHora) {
        return res.status(400).json({error: 'Parâmetros inválidos. Certifique-se de que está enviando km, tempo e dataHora no formato ISO 8601.' });
    }

    //calcula a tarifa e envia a resposta
    const tarifa = calcularTarifa(km, tempo, dataHora);
    res.json({tarifa: tarifa.toFixed(2)});
});