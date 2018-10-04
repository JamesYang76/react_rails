const { environment } = require('@rails/webpacker')

const ignoreLoader = require('./loaders/ignore') // Add this line
environment.loaders.append('ignore', ignoreLoader) // Add this line

module.exports = environment
