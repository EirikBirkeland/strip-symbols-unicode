const XRegExp = require('xregexp')

module.exports = function (str) {
    return XRegExp.replace(str, XRegExp('\\p{S}', 'g'), '')
}