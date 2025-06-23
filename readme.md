# Sincronizador Omie.PDV

Ferramentas úteis para integração e manutenção de dados do Omie.PDV.

## Descrição

Este projeto oferece uma interface web para facilitar operações de sincronização e reprocessamento de dados entre sistemas integrados ao Omie.PDV. As principais funcionalidades são:

- **Sincronizador:** Permite atualizar categorias, contas correntes, dados da empresa, locais de estoque, vendedores e usuários via API.
- **Reprocessa Movimento:** Permite reprocessar movimentos específicos informando os parâmetros necessários.

## Funcionalidades

- Interface amigável e responsiva (Bootstrap)
- Seleção de ambiente (Homologação/Produção)
- Feedback visual de carregamento e resultados
- Exibição dos retornos das APIs em formato de tabela
- Login simples para acesso ao dashboard

## Estrutura do Projeto

```
/
├── public/
│   ├── dashboard.html
│   ├── login.css
│   ├── login.js
│   ├── rep/
│   │   ├── rep.css
│   │   ├── rep.html
│   │   └── rep.js
│   └── sync/
│       ├── sync.css
│       ├── sync.html
│       └── sync.js
├── index.html
├── server.js
├── packge.json
├── install.sh
└── CNAME
```

## Como Executar

1. Instale as dependências:
   ```sh
   npm install
   ```

2. Inicie o servidor:
   ```sh
   node server.js
   ```

3. Acesse no navegador:
   ```
   http://localhost:1060
   ```

## Observações

- O login padrão é usuário: `admin` e senha: `admin`.
- O projeto está em fase alpha e pode sofrer alterações.
- Apenas clientes com Omie ID podem utilizar as funções de sincronização.

## Autor

Feito com amor 💚 por **Filipe Santos** e **Chat GPT**.