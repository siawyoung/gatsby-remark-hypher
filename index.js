const RemarkHypher = require('remark-hypher')

module.exports = ({ markdownAST }, options) =>
  RemarkHypher(options)(markdownAST)
