const common = `
    --require setup/assertions.js
    --require setup/hooks.js
    --require step-definitions/**/*.step.js

    --require json:cucumber_report.json
    --require html:reports/**/*.html
    --publish-quiet   
    --format summary
 
    --require progress-bar
    --require package.json    
    
    `


module.exports = {
  default: `${common} features/**/*.feature`,
}

