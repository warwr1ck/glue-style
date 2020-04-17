const sass = require('sass')
const postcss = require('postcss')
const autoprefixer = require('autoprefixer')
const fs = require('fs')

const inputFile = 'src/index.scss'
const outputFile = 'glue-style.css'

const result = sass.renderSync({
  file: inputFile,
  outputStyle: 'compressed'
})

postcss([autoprefixer])
  .process(result.css.toString(), { from: inputFile, to: outputFile })
  .then(result => {
    fs.writeFile(outputFile, result.css, () => true)
  })
