const Pool = require('pg').Pool
const dbConfig = require('./dbConfig')
const pool = new Pool(dbConfig)

async function dbConnect() {
  try {
    const client = await pool.connect()
    console.log('Db connected')
    return client
  }
  catch(err) {
    console.log(err)
  }
}

module.exports = dbConnect