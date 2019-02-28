const Pool = require('pg').Pool
const dbConfig = require('./src/server/apis/db/dbConfig')
const pool = new Pool(dbConfig)

async function dbConnect() {
  try {
    const client = await pool.connect()
    console.log('db connected')
    return client
  }
  catch(err) {
    console.log(err)
  }
}

async function query() {
  const client = await dbConnect()
  try {
    const result = await client.query('SELEC * FROM work_order')
    console.log(result)
  }
  catch(err) {
    console.log(err)
  }
  finally {
    client.end()
    console.log('db disconnected')
  }
}

query()