async function dbConnect(pool) {
  const client = await pool.connect()
  await console.log(client)
  console.log('aaa')
}

module.exports = dbConnect