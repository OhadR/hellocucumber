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