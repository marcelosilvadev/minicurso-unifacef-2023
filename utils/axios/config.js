const https = require('https')

const config = {
  timeout: 15000,
  httpsAgent: new https.Agent({
    rejectUnauthorized: false
  })
}

module.exports = {
  config
}
