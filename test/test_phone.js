const input = require('../phone').testInput
const assert = require('chai').assert

describe("Check", function(){
  it("should return FALSE if given no input", function() {
    var result = input()
    assert.isFalse(result)
  })

  it("should return FALSE if given input containing other than numbers", function() {
    var result = input('234j678')
    assert.isFalse(result)
  })

  it("should return FALSE if given input < 7 numbers long", function() {
    var result = input('234567')
    assert.isFalse(result)
  })

  it("should return FALSE if given input > 7 numbers long", function() {
    var result = input('23456798')
    assert.isFalse(result)
  })

  it("should return TRUE if given input 7 digits long", function() {
    var result = input('2345678')
    assert.isTrue(result)
  })

  it("should return FALSE if given input containing a 0", function() {
    var result = input('2341567')
    assert.isFalse(result)
  })
})