const express = require('express');
const cors = require('cors')

const allowedOrigins = [
    '*',
    'http://localhost:4200',    
]

const app = express()   
      port = 5000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin : allowedOrigins
})) 
 
const hyperfaucet = require('./backend/hyperfaucet')
const ad2word = require('./backend/ad2word')

app.post('/hyperfaucet', hyperfaucet.login) 
app.post('/ad2word', ad2word.login)

app.listen(port, ()=> {
    console.log('estamos ready bb')
}) 