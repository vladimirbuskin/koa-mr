var Koa = require('koa')
var _ = require('koa-route')
var mount = require('koa-mount')

var methods = ['all', 'get', 'head', 'post', 'put', 'delete', 'connect', 'options', 'trace']

class KoaMR extends Koa {

  constructor () {
    // call constructor
    super()

    var self = this

    // get prototype
    var proto = Object.getPrototypeOf(this)

    // extend prototype with HTTP methods
    methods.forEach(x => {
      proto[x] = function () {
        self.use(_[x].apply(_, arguments))
      }
    })

    // extend with mount method
    proto.mount = function () {
      self.use(mount.apply(null, arguments))
    }
  }

}

module.exports = KoaMR
