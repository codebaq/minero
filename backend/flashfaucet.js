const puppeteer = require('puppeteer-extra');
const RecaptchaPlugin = require('puppeteer-extra-plugin-recaptcha')
puppeteer.use(
  RecaptchaPlugin({
    provider: {
      id: '2captcha',
      token: 'b9f0a909795bdebc4bc7dc52e4d29e46' // REPLACE THIS WITH YOUR OWN 2CAPTCHA API KEY ⚡
    },
    visualFeedback: true // colorize reCAPTCHAs (violet = detected, green = solved)
  })
)

const login = async (req,res) => {   
    const browser = await puppeteer.launch({         
                 
      headless: false,

    });
    const cookies = await req.body.body
    const cookieJson = await JSON.parse(cookies);   
    const page = await browser.newPage();   
    await page.setViewport({width:1366, height:768});    
    await page.setCookie(...cookieJson);
    await page.goto('https://www.flashfaucet.com/faucet')     
    await page.waitForSelector('#fbtn')
    await page.solveRecaptchas()
    await page.click('#fbtn')
    
    
   res.status(201).send({})  
 
} 
 
module.exports = {
    login 
}