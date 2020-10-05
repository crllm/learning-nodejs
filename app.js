const express = require('express');
const app = express();

app.get('/', (req, res) =>{
    return res.send({message: 'Método GET ok'});
})

app.post('/', (req, res) =>{
    return res.send({message: 'Método POST ok'});
})

app.listen(3000);

module.exports = app;
 
