var eslint = require('eslint')
var test = require('tape')
var fs = require('fs')

test('load config in eslint to validate all rule syntax is correct', function (t) {
  var CLIEngine = eslint.CLIEngine

  var cli = new CLIEngine({
    useEslintrc: false,
    configFile: 'eslintrc.json'
  })

  var codes = fs.readdirSync(__dirname + '/codes')

  for (var i = 0; i < codes.length; i++) {
    var code = fs.readFileSync(__dirname + '/codes/' + codes[i])
    code = code.toString()
    t.ok(cli.executeOnText(code).errorCount === 0, 'cli.executeOnText(' + code + ')')
  }

  t.end()
})
