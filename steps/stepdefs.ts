const assert = require('assert');
import { binding, given, then, when } from "cucumber-tsflow";
const fs = require('fs');
const fsPromises = require("fs").promises;


function isItFriday(today) {
    return 'Nope';
}

@binding()
export class Steps {

    private today;
    private actualAnswer;

    @given('today is Sunday')
    public some1() {
        this.today = 'Sunday';
    };

    @when('I ask whether it\'s Friday yet')
    public function2 () {
        this.actualAnswer = isItFriday(this.today);
    };

    @then('I should be told {string}')
    public function3(expectedAnswer) {
        assert.strictEqual(this.actualAnswer, expectedAnswer);
    };

// Take a callback as an additional argument to execute when the step is done
    @then(/the file named (.*) is empty/)
    public async function4(fileName) {
        const contents = await fsPromises.readFile(fileName, 'utf8');
        assert.equal(contents, '');
    };
}
