process.env.NODE_ENV = 'production'

const chalk = require('chalk')
const webpack = require('webpack')
const optimizedConfig = require('./webpack.optimized.conf')
const herocuConfig = require('./webpack.heroku.conf')

let mainConfig


switch (process.argv[2]) {
    case 'prod':
        mainConfig = optimizedConfig
        break
    case 'heroku':
        mainConfig = herocuConfig
        break
    default:
        mainConfig = optimizedConfig
}

webpack(mainConfig, function (err, stats) {

  if (err) throw err

  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }))

  console.log('\n')
  console.log(chalk.green('>>>'), chalk.blue('Build complete!'))
  console.log(chalk.red('>>>'), chalk.yellow('Very important information!'), '\n')
})
