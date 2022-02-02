# hellocucumber

this is the JS (no TS) version

    npm init --yes
    npm install --save-dev @cucumber/cucumber
    npm test
    
    npm i debug express
    npm install ts-node --save-dev
    npm install typescript --save-dev

set env-vars:

    set PORT=8088
    set DEBUG=*

running the controller:
    
    node controller.js

...and then call the server:

    POST
    http://{{cucumber-host}}:{{process.env.PORT}}/run

## Refs

[cucumber git | Proposal: Programmatic API for running cucumber-js #1711](https://github.com/cucumber/cucumber-js/issues/1711)

[Open up const { Cli } = require('@cucumber/cucumber') for programmatic usage #1710](https://github.com/cucumber/cucumber-js/issues/1710)

[Steps undefined when using cucumber-js CLI #1278](https://github.com/cucumber/cucumber-js/issues/1278)

[stackoverflow | Is it possible to run Cucumber.js programmatically?](https://stackoverflow.com/questions/58588588/is-it-possible-to-run-cucumber-js-programmatically)