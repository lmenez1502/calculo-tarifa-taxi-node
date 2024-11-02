Cálculo de Tarifa de Táxi com Node.js

Este é um projeto de exemplo que simula o cálculo de tarifas de táxi utilizando Node.js e Express. O código foi criado para calcular o valor de uma corrida de táxi com base na distância percorrida (quilômetros), no tempo da corrida (em minutos) e no dia e hora da corrida, aplicando diferentes tarifas (bandeira 1 ou bandeira 2).

Funcionalidades

Calcula a tarifa com base nos quilômetros percorridos, tempo em minutos, e bandeirada.

Aplica as tarifas de acordo com a bandeira 1 ou bandeira 2, considerando:

Bandeira 2 é aplicada durante fins de semana, feriados, e das 20h às 6h de segunda a sábado.

Bandeira 1 é aplicada nos demais horários.

Tecnologias Utilizadas

Node.js: Plataforma para execução de código JavaScript no servidor.

Express: Framework para criação de aplicações web e APIs.

Moment.js: Biblioteca para manipulação de datas e horas.

Como Rodar o Projeto

1. Requisitos

Node.js instalado na sua máquina.

NPM (Node Package Manager) para gerenciar as dependências.

2. Instalação

Clone este repositório em sua máquina:

$ git clone https://github.com/seu-usuario/calculo-tarifa-taxi-node.git
$ cd calculo-tarifa-taxi-node

Instale as dependências do projeto:

$ npm install

3. Execução do Servidor

Para iniciar o servidor, utilize o comando:

$ node server.js

O servidor estará ouvindo na porta 3000 por padrão. Você pode acessar os endpoints utilizando ferramentas como Postman ou Insomnia.

Estrutura do Projeto

server.js: Arquivo principal que contém toda a lógica do servidor e do cálculo da tarifa.

Melhorias Futuras

Implementar suporte a feriados nacionais automaticamente.

Adicionar testes unitários para garantir a precisão do cálculo.

Criar uma interface front-end para que os usuários possam interagir de maneira mais amigável.

Contribuições

Contribuições são bem-vindas! Fique à vontade para abrir issues ou enviar pull requests.
