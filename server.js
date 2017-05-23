const path = require('path')
const express = require('express')

module.exports = {
  app: function () {
    const app = express()
    const indexPath = path.join(__dirname, 'index.html')
    console.log('Index path is: ', indexPath)
    const publicPath = express.static(path.join(__dirname, 'public'))
    console.log('Public path is: ', publicPath)

    app.use('/public', publicPath)
    app.get('/', function (_, res) { res.sendFile(indexPath) })

    return app
  }
}
