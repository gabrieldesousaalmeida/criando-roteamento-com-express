const express = require('express')
const app = express();

app.get('/', (req, res)=>{
    res.send('Olá mundo');
})

app.get('/sobre', (req, res)=>{
    res.send('Página Sobre');
})

app.listen(8080, ()=>{
    console.log('programa rodando')
})