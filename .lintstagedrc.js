const path = require('path')

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`

const jestCommand = (filenames) =>
`jest --watchAll=false --findRelatedTests --passWithNoTests ${filenames
  .map((f) => path.relative(process.cwd(), f))
  .join(' --file ')}`


module.exports = {
  '*.{js,jsx,ts,tsx}': [buildEslintCommand, jestCommand],
}