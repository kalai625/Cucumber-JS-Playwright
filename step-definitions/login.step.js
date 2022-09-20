const { Given, When, Then, defineStep } = require('@cucumber/cucumber')
//const { LoginPage } = require('../page-objects/login_page')
const { LoginPage } = require('../page-objects/login_page')


const loginPage = new LoginPage()

Given('I visit a login page', async ()=> {
  await loginPage.navigateToLoginScreen();
 
});

When('Pause',async ()=>{

  await loginPage.pause();
})

When('Error',async ()=>{
  //await loginPage.errormethod();
})

Then('Enter the searchvalue' ,async()=>{
  await loginPage.enterTextSearchBox();
})

defineStep('I wait for 3 seconds', async ()=> {
  await loginPage.pause()
});



