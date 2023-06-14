const puppeteer = require('puppeteer-extra');

const login = async (req,res) => {   
    const browser = await puppeteer.launch({ 
        args: [
           '--start-maximized',            
      ] ,         
    });
    const cookies = await req.body.body
    const cookieJson = await JSON.parse(cookies);   
    const page = await browser.newPage();   
    await page.setViewport({width:1366, height:768});   
    await page.setCookie(...cookieJson);
    await page.goto('https://faucets.win/faucet/currency/trx')   
   res.status(201).send({})  
 
} 
 
module.exports = {
    login 
}