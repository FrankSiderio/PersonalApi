'use strict'

/*
|--------------------------------------------------------------------------
| Https server
|--------------------------------------------------------------------------
|
| This file bootstrap Adonisjs to start the HTTPS server. You are free to
| customize the process of booting the http server.
|
| """ Loading ace commands """
|     At times you may want to load ace commands when starting the HTTPS server.
|     Same can be done by chaining `loadCommands()` method after
|
| """ Preloading files """
|     Also you can preload files by calling `preLoad('path/to/file')` method.
|     Make sure to pass relative path from the project root.
*/

const { Ignitor } = require('@adonisjs/ignitor')
const path = require('path')
const https = require('https')
const fs = require('fs')

// Certificate
const options = {
  key: fs.readFileSync('/etc/letsencrypt/live/franksiderio.me/privkey.pem')),
  cert: fs.readFileSync('/etc/letsencrypt/live/franksiderio.me/fullchain.pem'))
}

new Ignitor(require('@adonisjs/fold'))
  .appRoot(__dirname)
  .fireHttpServer((handler) => {
    return https.createServer(options, handler)
  })
  .catch(console.error)
