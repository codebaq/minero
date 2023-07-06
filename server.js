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
const biduefaucet = require('./backend/biduefaucet')
const lalafaucet = require('./backend/lalafaucet')
const mydgcoin = require('./backend/mydgcoin')
const ltcking = require('./backend/ltcking')
const starbits = require('./backend/starbits')
const faucetwins = require('./backend/faucetswin')
const flashfaucet = require('./backend/flashfaucet')
const Adrevlinks = require('./backend/Adrevlinks')
const ourcoincash = require('./backend/ourcoincash')

app.post('/hyperfaucet', hyperfaucet.login) 
app.post('/ad2word', ad2word.login)
app.post('/biduefaucet', biduefaucet.login)
app.post('/lalafaucet', lalafaucet.login)
app.post('/mydg', mydgcoin.login)
app.post('/ltcking', ltcking.login)
app.post('/starbits', starbits.login)
app.post('/faucetwins', faucetwins.login)
app.post('/flashfaucet', flashfaucet.login)
app.post('/adrevlinks', Adrevlinks.Adrevlinks)
app.post('/ourcoincash', ourcoincash.login)

app.listen(port, ()=> {
    console.log('estamos ready bb')
})  