const playwright = require('playwright')
const { Before, After, BeforeAll, AfterAll, Status } = require('@cucumber/cucumber')

// To launch the browser before all the scenarios
BeforeAll(async () => {
  console.log('Launch Browser--001')
  // Giving browser- Chromium and headed mode
  global.browser = await playwright['chromium'].launch({ headless: false })

  
})

// To close the browser after all the scenarios
AfterAll(async () => {
  console.log('Close Browser--004')
  await global.browser.close()
})

// Before every scenario, Create new context and page
Before(async () => {
  console.log('Create new context and page--002')
  global.context = await global.browser.newContext()
  global.page = await global.context.newPage()


})

// After every scenario, Close context and page
After(async () => {
  console.log('Close context and page--003')
  await global.page.close()
  await global.context.close()
})
After(async function (scenario) {
  if (scenario.result.status === Status.PASSED) {    
    console.log('test Passed  scenarios  /'+`${scenario.pickle.name}` )     
  } 
  else
  {
    const ref = await global.page.screenshot({ path: `screenshotsFailed/${scenario.pickle.name}.png`, fullPage: true });
  }
})
// After(async function (scenario) {
//   if (scenario.result.status === Status.FAILED) {
//     const counter = scenario.pickle.name
//       await global.page.screenshot({ path: `reportsfail/${counter}.png`, fullPage: true })
//      // await global.page.screenshot({ path: 'reportsfail/${scenario.pickle.name}.png', fullPage: true })
//      //this.attach(buffer, 'image/png');
//   } 
// })
