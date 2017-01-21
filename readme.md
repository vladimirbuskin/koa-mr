# koa-mr

koa extended with *koa-route* and *koa-mount* methods.
So methods:

```javascript
app.get(...)
app.post(...)
// methods available ['all', 'get', 'head', 'post', 'put', 'delete', 'connect', 'options', 'trace']
```

and 

```javascript
app.mount(...)
```

are already in place.

## Usage example

index.js

```javascript
const Koa = require('koa-mr')

const users = require('./users')
const home = require('./home')

const app = new Koa()

app.mount('/', home)
app.mount('/users', users)

app.listen(3000)
console.log('listen port 3000')
```

home.js

```javascript
const Koa = require('koa-mr')
const app = new Koa()

app.get('/', function (ctx) {
  ctx.body = 'home'
})

module.exports = app
```

users.js

```javascript
const Koa = require('koa-mr')
const app = new Koa()

app.get('/', function () {
  var users = [
    {id: 1, name: 'user1'},
    {id: 2, name: 'user2'},
    {id: 3, name: 'user3'}
  ]
  this.body = users
})

module.exports = app
```

Working example you can find here:

[https://github.com/vladimirbuskin/koa-mr-example](https://github.com/vladimirbuskin/koa-mr-example)

