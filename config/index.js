require('dotenv').config()

module.exports = {
  PORT: process.env.APP_PORT,
  CLIENT_ID: process.env.CLIENT_ID,
  CLIENT_SECRET: process.env.CLIENT_SECRET,
  USERNAME: process.env.USERNAME,
  PASSWORD: process.env.PASSWORD,
  RESOURCE: process.env.RESOURCE,
}
