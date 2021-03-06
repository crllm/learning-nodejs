const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const url = 'mongodb+srv://admin:admin12345@clusterapi.orwjg.mongodb.net/ClusterAPI?retryWrites=true&w=majority';
const options = {useNewUrlParser: true, useUnifiedTopology: true};


mongoose.connect(url, options);
mongoose.set('useCreateIndex', true);

mongoose.connection.on('error', (err) =>{
    console.log('Erro na conexão com o banco de dados');
})

mongoose.connection.on('disconnected', () => {
    console.log('Aplicação desconectada do banco de dados');
})

mongoose.connection.on('connected', () => {
    console.log('Aplicação conectada do banco de dados');
})

//Body Parser
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json);

const indexRoute = require('./Routes/index');
const usersRoute = require('./Routes/users');

app.use('/', indexRoute);
app.use('/users', usersRoute);

app.listen(3000);

module.exports = app;
 
