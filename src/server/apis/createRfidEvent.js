const Pool = require('pg').Pool
const dbConfig = require('./dbConfig')

async function createRfidEvent(req, res) {
  const id = req.params.id
  const { status } = req.body
  const client = await pool.connect()
  await client.query(
    'UPDATE work_order SET status = $2 WHERE work_order_code = $1',
    [id, status],
    (err, result) => {
      if (err) throw err
      res.status(200).send(`Status modified with order code: ${id}`)
    }
  )
  client.release()
}