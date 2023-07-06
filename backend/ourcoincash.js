const puppeteer = require('puppeteer-extra');
const RecaptchaPlugin = require('puppeteer-extra-plugin-recaptcha')
const StealthPlugin = require('puppeteer-extra-plugin-stealth')
puppeteer.use(StealthPlugin())
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
      headless: true,          
    });
    const cookies = await req.body.body
    const cookieJson = await JSON.parse(cookies);   
    const page = await browser.newPage();   
    await page.setViewport({width:1920, height:1080});    
    await page.setCookie(...cookieJson);
    await page.goto('https://ourcoincash.xyz/faucet', {waitUntil: 'networkidle2',})  
    await page.waitForSelector('#content > div.layout-px-spacing > div.row.layout-top-spacing > div:nth-child(4) > div > div:nth-child(2) > h4', { timeout: 5000 });
    await page.waitForSelector('#selectCaptcha', { timeout: 5000 });       
    await page.select('select[name="captcha"]', 'recaptchav2');  
    const ClaimsShortLinks = await page.evaluate(()=> Array.from(document.querySelectorAll('#content > div.layout-px-spacing > div.row.layout-top-spacing > div:nth-child(4) > div > div:nth-child(2) > h4'), el => el.innerText))
    let RestClaim = await ClaimsShortLinks[0].split('/')[0]   
    await page.waitForSelector('#recaptchav2', { timeout: 5000 } )  
    await page.solveRecaptchas()   
    await page.waitForTimeout(60000)
    await page.evaluate(()=> Array.from(document.querySelectorAll('#content > div.layout-px-spacing > div:nth-child(3) > div.col-12.col-md-8.col-lg-6.order-md-2.mb-4.text-center > form > button'), el => el.click()))    
    await page.waitForTimeout(10000)
    RestClaim = await parseInt(RestClaim - 1)      
    await browser.close()  
    await res.status(201).send({res : RestClaim})     
} 

module.exports = {
    login 
}  