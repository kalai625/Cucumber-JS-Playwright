const common = `
    --require setup/assertions.js
    --require setup/hooks.js
    --require step-definitions/**/*.step.js

    --publish-quiet   
    --format summary
  
    --require progress-bar
    --require package.json  
    --require playwright.config.js  
    
    `


module.exports = {
  default: `${common} features/**/*.feature`,
}

