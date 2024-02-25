document.getElementById('requisicaoForm').addEventListener('submit', function(event) {
event.preventDefault();

var inicioRequisicao = new Date().getTime();

var idAplicativo = document.getElementById('idAplicativo').value;
var numeroMovimento = document.getElementById('numeroMovimento').value;
var numeroCaixa = document.getElementById('numeroCaixa').value;
var numeroCupom = document.getElementById('numeroCupom').value || 'null';

var url = `https://appdevi-api.trafficmanager.net/odata/ProcessaMovimento(id_aplicativo=${idAplicativo},numero_movimento=${numeroMovimento},numero_caixa=${numeroCaixa},numero_cupom=${numeroCupom})`;

var spinner = document.getElementById('spinner');
spinner.style.display = 'inline-block';

var tempoRequisicao = document.getElementById('tempoRequisicao');

var timer = setInterval(function() {
    var tempoDecorrido = (new Date().getTime() - inicioRequisicao) / 1000;
    tempoRequisicao.textContent = `Tempo de Requisição: ${tempoDecorrido.toFixed(2)} segundos`;
}, 100);

fetch(url, {
    method: 'POST'
})
.then(response => {
    clearInterval(timer);
    tempoRequisicao.textContent = ''; // Limpa o texto do temporizador
    spinner.style.display = 'none';
    if (!response.ok) {
    throw new Error('Erro na requisição.');
    }
    return response.json();
})
.then(data => {
    console.log('Requisição bem sucedida:', data);
    var retornoJson = document.getElementById('retornoJson');
    retornoJson.innerHTML = createTableFromJson(data);
})
.catch(error => {
    console.error('Erro:', error);
    alert('Erro na requisição. Veja o console para mais detalhes.');
});
});

function createTableFromJson(data) {
var table = '<table class="table table-dark">';
for (var key in data) {
    if (data.hasOwnProperty(key)) {
    table += `<tr><th>${key}</th><td>${data[key]}</td></tr>`;
    }
}
table += '</table>';
return table;
}