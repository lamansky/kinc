'use strict'

const edit = require('kedit')
const toNumber = require('2/number')
const xfn = require('xfn')

module.exports = xfn(
  {pluralArg: 1, pluralProp: 'all', pluralReturn: true},
  (collection, keys, addend = 1, {init = 0, ...options} = {}) =>
    edit.all(collection, keys, n => toNumber(n) + toNumber(addend), {...options, notFound: init})
)
