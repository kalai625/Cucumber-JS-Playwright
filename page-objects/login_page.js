class LoginPage {
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

  async pause() {
    // Wait for 3 seconds
    await page.waitForTimeout(3000)
  }
}

module.exports = { LoginPage }
