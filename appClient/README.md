# Desafio Toro US-002

TORO-002 - Eu, como investidor, gostaria de visualizar meu saldo, meus investimentos e meu patrimônio total na Toro.

Restrições:
Patrimônio do usuário deve conter as seguintes informações
Saldo atualmente em conta corrente
Lista de ativos (ações) pertencentes ao usuário, com quantidade de cada ativo e valor individual atual de cada um. (Ex: 10 ações PETR4, valor individual R$25,00)
Patrimônio sumarizado (Saldo + Valor totalizado dos ativos)

API de saldo e patrimônio do cliente:

```
GET <apiBaseUrl>/userPosition

{
    "checkingAccountAmount": [
        {
            "balance": 234.00
        }
    ],
    "positions": [
        {
            "symbol": "PETR4",
            "amount": 2,
            "currentPrice": 28.44
        },
        {
            "symbol": "SANB11",
            "amount": 3,
            "currentPrice": 40.77
        }
    ],
    "consolidated": [
        {
            "balance": 413.19
        }
    ]
}
```

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

### 🎲 Rodando Aplicação

```bash
# Clone este repositório
git clone <https://github.com/Rodrigopa93/DesafioToroInvestimentos.git>

# Acesse a pasta do projeto(appClient) no terminal/cmd
cd appClient

# Instale as dependências
npm install

# Instale o pacote JSON Server
npm install -g json-server

# Entre na pasta do backend do Projeto e rode o seguinte comando para que o JSON Server seja inicializado:
npx json-server --watch userData.json

# O servidor backend inciará na porta:3000 - acesse <http://localhost:3000>

# Execute a aplicação
ng server

# O servidor inciará na porta:4200 - acesse <http://localhost:4200/>
