# Desafio Toro US-002

<b>Projeto:</b>

Será uma tela aonde terá informações como: Patrimônio, saldo atual da conta corrente e a lista de ativos pertencentes ao investidor. 
A api sugerida na US-002 foi construída a partir de um pacote chamado json-server que cria um serviço JSON REST que será consumido pelo Angular, e consequentemente será exibido em tela as informações do usuário.

<b>Como executar a aplicação:</b>

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
npx json-server --watch userPositions.json

# O servidor backend inciará na porta:3000 - acesse <http://localhost:3000>

# Execute a aplicação
ng server

# O servidor inciará na porta:4200 - acesse <http://localhost:4200/>
