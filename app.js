const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//BodyParser para ler o JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Caminho das Rotas 
const value = require('./src/routes/calculation');
const table = require('./src/routes/mrd_table')

//Chamada das Rotas
app.use('/transaction', value);
app.use('/mrd', table);

app.listen(3000);

console.log("Server running on port 3000");