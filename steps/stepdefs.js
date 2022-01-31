const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');
const fs = require('fs');

function isItFriday(today) {
    return 'Nope';
}

Given('today is Sunday', function () {
    this.today = 'Sunday';
});

When('I ask whether it\'s Friday yet', function () {
    this.actualAnswer = isItFriday(this.today);
});

Then('I should be told {string}', function (expectedAnswer) {
    assert.strictEqual(this.actualAnswer, expectedAnswer);
});

// Asynchronous - callback
//
// Take a callback as an additional argument to execute when the step is done
Then(/^the file named (.*) is empty$/, function (fileName, callback) {
    fs.readFile(fileName, 'utf8', function(error, contents) {
        if (error) {
            callback(error);
        } else {
            assert.equal(contents, '');
            callback();
        }
    });
});