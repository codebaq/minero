const puppeteer = require('puppeteer-extra')
const StealthPlugin = require('puppeteer-extra-plugin-stealth')
puppeteer.use(StealthPlugin())

const Adrevlinks = async (req,res) => {  
   const browser = await puppeteer.launch({
    args: [
        '--start-maximized',            
   ] ,    
    });
	const page = await browser.newPage();	    
    let cookie = req.body.body
    const cookies = await JSON.parse(cookie)    
    await page.setCookie(...cookies)
	await page.goto('https://autoclaim.in/dashboard/shortlinks'); 
	await page.setViewport({width: 1280, height: 720});
    const NameShortLinks = await page.evaluate(()=> Array.from(document.querySelectorAll('p.name'), el => el.firstChild.data))
    const ClaimsShortLinks = await page.evaluate(()=> Array.from(document.querySelectorAll('p.info'), el => el.innerText))
    const BtnShortlinks = await page.$$('button[type=submit]')
    BtnShortlinks[BtnShortlinks.length - 1].click(BtnShortlinks)
    await setTimeout(async() => {      
       const pages = await browser.pages()
      await pages[2].evaluate(()=> Array.from(document.querySelectorAll('.get-link'), el => el.click()))    
      const RestClaimindex = await ClaimsShortLinks[BtnShortlinks.length - 1]
      let RestClaim = await RestClaimindex.split(' ')[2].split('/')[0]
      RestClaim = await parseInt(RestClaim - 1)  
      await page.waitForTimeout(1000)
      await browser.close() 
     // await page.waitForTimeout(1000)
      await res.status(201).send({res : RestClaim})                 
    }, 15000);
     
} 
 

module.exports = {
    Adrevlinks 
}