var Koa = require('koa')
var Koax = require('./koa-mr')
var assert = require('assert')
var methods = ['all', 'get', 'head', 'post', 'put', 'delete', 'connect', 'options', 'trace']

describe('koax', function () {
  it('extends koa', function () {
    var koa = new Koax()
    assert(koa instanceof Koa)
    assert(koa instanceof Koax)
  })

  it('koax has HTTP methods', function () {
    var koax = new Koax()
    methods.forEach(x => assert(koax[x] != null))
  })

  it('koax has mount', function () {
    var koax = new Koax()

    assert(koax.mount != null)
  })
})
