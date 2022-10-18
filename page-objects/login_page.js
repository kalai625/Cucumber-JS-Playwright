const { parseGherkinMessageStream } = require("@cucumber/cucumber");


class LoginPage {
  
  async testleafUrl() {    
    await page.goto('https://www.leafground.com/dashboard.xhtml');    
 }
 
 async fillEmailadress(){
  await page.locator('[placeholder="E-mail Address"]').fill('kalai@annular.com');
 }

 async textmessageTeamAnnular(){
  await page.locator('textarea[role="textbox"]').fill('Team Annular'); 
 }

 async msgClicksumbit(){
  await page.locator('button[role="button"]:has-text("Send")').click();
 }

 async pause() {
  // Wait for 3 seconds
  await page.waitForTimeout(3000)
}
async take_screenshot() {
 // const ref = await global.page.screenshot({ path: `TestCaseScreenshot/${scenario.pickle.name}.png`, fullPage: true });
 const ref = await global.page.screenshot({ path: `reports/TestScenario.png`, fullPage: true });
}


//******************* */
  async navigateToLoginScreen() {
     await page.goto('https://www.google.com/');
     //await page.locator('[aria-label="Search"]').click()
  }

  async enterTextSearchBox(){
    await page.locator('[aria-label="Search"]').click();
  await page.locator('[aria-label="Search"]').fill('linkedin');
  await page.waitForTimeout(3000)
  }
  async errormethod(){
   await page.wait('[dssfsd"Sesddarch"]').fill('linkedin') 
  }

  async submitLoginForm() {
    await page.fill('#user-name', 'standard_user')
    await page.fill('#password', 'secret_sauce')
    await page.click('#login-button')
  }

  async submitLoginWithParameters(username, password) {
    await page.fill('#user-name', username)
    await page.fill('#password', password)
    await page.click('#login-button')
  }

  async assertUserIsLoggedIn() {   
    await page.waitForSelector('.inventory_list')
  }


}

module.exports = { LoginPage }
