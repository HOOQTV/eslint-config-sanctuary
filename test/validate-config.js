'use strict';

const eslint = require('eslint'),
    test = require('tape'),
    path = require('path'),
    fs = require('fs');

test('load config in eslint to validate all rule syntax is correct', function(t) {
    const CLIEngine = eslint.CLIEngine,
        cli = new CLIEngine({
            useEslintrc: false,
            configFile: 'eslintrc.json'
        }),

        codes = fs.readdirSync(path.join(__dirname, '/codes'));

    for (let i = 0; i < codes.length; i++) {
        let code = fs.readFileSync(path.join(__dirname, '/codes/', codes[ i ]));
        code = code.toString();
        t.ok(cli.executeOnText(code).errorCount === 0, 'cli.executeOnText(' + code + ')');
    }
    t.end();
});
