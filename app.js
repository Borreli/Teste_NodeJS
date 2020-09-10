const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./config/config');


// informações da conexão de banco de dados
const url = config.bd_string;
const options = {
                 //reconnectTries: Number.MAX_VALUE,
                 //reconnectInterval: 500,
                 poolSize: 5,
                 useNewUrlParser: true,
                 useUnifiedTopology: true
                };

mongoose.connect(url, options);
mongoose.set('useCreateIndex', true);

// "ouve" os eventos que podem ocorre
// mensagem de erro
mongoose.connection.on('error', (er) => {
    console.log('Erro na conexão com o banco de dados. ' + er);
})

mongoose.connection.on('connected', () => {
    console.log('Aplicação conectada ao banco de dados!');
})

// desconexão do banco de dados
mongoose.connection.on('disconnected', () => {
    console.log('Aplicação desconectada do banco de dados!');
})

// body parser - converte os dados json em objetos de javascript
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// define as rotas da API
const indexRoute = require('./Routes/index');
const usersRoute = require('./Routes/users');

app.use('/', indexRoute);
app.use('/users', usersRoute);

// define qual porta deve receber as conexões
app.listen(3000);

console.log('Sucesso!');
module.exports = app;