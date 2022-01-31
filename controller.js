const path = require('path');
const debug = require('debug')('controller');

const cucumber = require('@cucumber/cucumber');
const express = require("express");
const app = express();


// ------------------ app ---------------------//
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.get('/health', function (req, res) {
    debug(`health is called`);
    res
        .status(200)
        .json({status: 'ok'});
});

app.post('/run', async function (req, res) {
    debug(`run is called`);
    debug('process.cwd()', process.cwd());

    const runArgs = ['node', '.\\node_modules\\@cucumber\\cucumber\\bin\\cucumber-js', 'src/features/**/*.feature', '--require-module', 'ts-node/register', '--require', __dirname + '/src/steps/**/*.ts'];

//    let runArgs = ['node', '.\\node_modules\\@cucumber\\cucumber\\bin\\cucumber-js'];
    let cliArgs = {argv : runArgs, cwd: process.cwd(), stdout: process.stdout};
    debug(JSON.stringify(cliArgs));

    const definitionsFilePath = path.join(process.cwd(), 'cucumber.js')
    const definitions = require(definitionsFilePath) // eslint-disable-line @typescript-eslint/no-var-requires
    debug(definitions);
    debug(definitions['default']);

    const cli = new cucumber.Cli(cliArgs);
    const ret = await cli.run();
    debug(JSON.stringify(ret));

    res
        .status(200)
        .json({status: 'ok'});
});


app.listen(process.env.PORT, async() => {
    debug(`Express started on port ${process.env.PORT}`);
});
