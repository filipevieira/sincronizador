var isLoading = false;

function enviarRequisicao() {
  if (isLoading) {
    return;
  }

  var numeroInput = document.getElementById('numeroInput');
  var numero = numeroInput.value.trim();

  // Verifica se o campo número está vazio
  if (!numero) {
    exibirErro('Por favor, insira um código de integração antes de enviar.');
    return;
  }

  isLoading = true;
  var numero = document.getElementById('numeroInput').value;
  var urlChave = document.querySelector('input[name="urlChave"]:checked').value.trim();
  var categoriasCheckbox = document.getElementById('categoriasCheckbox').checked;
  var contaCorrenteCheckbox = document.getElementById('contaCorrenteCheckbox').checked;
  var empresaCheckbox = document.getElementById('empresaCheckbox').checked;
  var locaisEstoqueCheckbox = document.getElementById('locaisEstoqueCheckbox').checked;
  var vendedorCheckbox = document.getElementById('vendedorCheckbox').checked;
  var usuarioCheckbox = document.getElementById('usuarioCheckbox').checked;



  document.getElementById('resultado').innerHTML = '';
  document.getElementById('loading').style.display = 'block';

  if (!urlChave) {
    exibirErro('Selecione uma chave de URL.');
    return;
  }

  var requests = [];

  if (categoriasCheckbox) {
    requests.push(realizarRequisicao(urlChave + '/api/CadastroAuxiliarIntegracao/Categorias/' + numero, 'Categorias'));
  }
  
  if (contaCorrenteCheckbox) {
    requests.push(realizarRequisicao(urlChave + '/api/ContaCorrenteIntegracao/' + numero, 'Conta Corrente'));
  }
  
  if (empresaCheckbox) {
    requests.push(realizarRequisicao(urlChave + '/api/EmpresaIntegracao/' + numero, 'Empresa'));
  }
  
  if (locaisEstoqueCheckbox) {
    requests.push(realizarRequisicao(urlChave + '/api/ProdutoIntegracao/LocaisEstoque/' + numero, 'Locais de Estoque'));
  }
  
  if (vendedorCheckbox) {
    requests.push(realizarRequisicao(urlChave + '/api/VendedorIntegracao/' + numero, 'Vendedor'));
  }
  
  if (usuarioCheckbox) {
    requests.push(realizarRequisicao(urlChave + '/api/UsuarioIntegracao/' + numero, 'Usuário'));
  }  

  Promise.all(requests)
    .then(() => finalizarRequisicao())
    .catch(error => {
      console.error('Erro na requisição:', error);
      exibirErro('Erro na requisição. Verifique o console para mais detalhes.');
      finalizarRequisicao();
    });
}

function realizarRequisicao(url, tipo) {
  return fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => exibirResultado(tipo, data))
    .catch(error => {
      console.error('Erro na requisição:', error);
      exibirErro('Erro na requisição (' + tipo + '). Verifique o console para mais detalhes.');
      throw error;
    });
}

function exibirResultado(tipo, data) {
  document.getElementById('resultado').innerHTML += '<p>Resultado da requisição<strong> (' + tipo + '):</strong> ' + JSON.stringify(data) + '</p>';
}

function exibirErro(mensagem) {
  document.getElementById('resultado').innerHTML += '<p><strong>Erro:</strong> ' + mensagem + '</p>';
}

function finalizarRequisicao() {
  document.getElementById('loading').style.display = 'none';
  isLoading = false;
}


