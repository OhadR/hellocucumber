module.exports = {
    default: [
        '--require-module ts-node/register',    // Load TypeScript module
        `--require steps/**/*.ts'`,
        '--publish'].join(' ')
}