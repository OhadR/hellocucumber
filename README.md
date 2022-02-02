# hellocucumber

## the challenge

running a cucumber in a "regular" way, meaning by `npm test` is a common use case and I have here in my repos many sample-projects.
The challenge was with a VPC - closed env on AWS with very limited access. So cucumber has to be one of the dockers in that
env, and deployed in the VPC. Thus, it would be very difficult to run it by `npm test` because we have no access to the docker itself.
**The solution** is to expose a port, and to invoke cucumber using HTTP call.

At first, I was trying to use cucumber's Cli but it was not working with ts-flow (tested in this repo on another branch). Later 
I found a way to run Cli even on ts-flows. But another problem occured when step-definitions were loaded only once, and
in the second run cucumber did not find them ([see below](https://github.com/cucumber/cucumber-js/issues/1278)).

Eventually I used nodejs' ChildProcess.spawn(), to create a new process and run cucumber in it.

---

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