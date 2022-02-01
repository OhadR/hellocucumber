const { spawn } = require('child_process');
const path = require('path');
const debug = require('debug')('controller');

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

    spawnProcess();

    res
        .status(200)
        .json({status: 'ok'});
});


function spawnProcess () {
    console.log(`############   Going to spawn cucumber-js! #############`)
    const prs = spawn('node', ['.\\node_modules\\@cucumber\\cucumber\\bin\\cucumber-js'], {stdio: 'inherit', detached : false});

    console.log(`Spawned cucumber-js pid: ${prs.pid}`);

    prs.on('error', (err) => {
        console.error(`Failed to start cucumber-js`);
    });

    prs.on('close', (code) => {
        console.log(`############   'cucumber-js' process exited with code ${code} #############`);
    });
}

app.listen(process.env.PORT, async() => {
    debug(`Express started on port ${process.env.PORT}`);
});
