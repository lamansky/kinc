'use strict'

const assert = require('assert')
const inc = require('.')

describe('inc()', function () {
  it('should increment existing value', function () {
    const obj = {i: 5}
    inc(obj, 'i', 2)
    assert.strictEqual(obj.i, 7)
  })

  it('should decrement if number is negative', function () {
    const obj = {i: 5}
    inc(obj, 'i', -2)
    assert.strictEqual(obj.i, 3)
  })

  it('should start at zero if key does not exist', function () {
    const map = new Map()
    inc(map, 'key', 9)
    assert.strictEqual(map.get('key'), 9)
  })

  it('should start at `init` if key does not exist', function () {
    const map = new Map()
    inc(map, 'key', 9, {init: 10})
    assert.strictEqual(map.get('key'), 19)
  })

  it('should use a default addend of 1', function () {
    const map = new Map()
    inc(map, 'key')
    inc(map, 'key')
    assert.strictEqual(map.get('key'), 2)
  })

  it('should return the new value', function () {
    assert.strictEqual(inc({}, 'key'), 1)
  })

  it('should convert strings to numbers', function () {
    assert.strictEqual(inc(['1'], 0, '2'), 3)
  })

  it('should throw TypeError attempting to increment a key on a non-object', function () {
    assert.throws(() => inc('string', 'key'), TypeError)
  })

  it('should throw TypeError attempting to edit a property on nested non-object', function () {
    assert.throws(() => inc({sub: 'string'}, ['sub', 'key']), TypeError)
  })
})
