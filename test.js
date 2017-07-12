const test = require('ava')
const m = require('.')

test('Roman alphabets', t => {

    // Some of these special characters are not considered 'punctuation', hence not stripped
    t.is("\\.,/a#!%&*;:{}_()", m(`\\.,\/a#!$%\^&\*;:{}=_~()`))
    t.is("abc", m(`a¤b¤c`))
    t.is("abc", m(`a$b$c`))

    t.is("a.b.c.", m("a.b.c."))
    t.is("!oh!my!", m("!oh!my!"))
    t.is(`!"!æ/%/()"#%ø/(!"å`, m(`!"!æ/%/()"#%ø/(!"å`))
    t.is("a-b-c", m(`a-b-c`))
    t.is("a\b\c", m(`a\b\c`))
    t.is("a/b/c", m(`a/b/c`))
})

test('East Asian characters (Japanese)', t => {
    t.is("日本語猫韓国", m("日本語＄猫＄韓国"))

    t.is("日本語・猫・韓国", m("日本語・猫・韓国"))
    t.is("日本語（猫）韓国", m("日本語（猫）韓国"))
})