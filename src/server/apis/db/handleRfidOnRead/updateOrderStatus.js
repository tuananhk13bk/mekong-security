const dbConnect = require('../dbConnect')

const QUERY_STRING = `UPDATE work_order SET status_id = $2 WHERE work_order_code = $1`

async function updateOrderStatus(req, res) {
  const workOrderCode = req.params.workOrderCode
  const { statusId } = req.body
  const client = await dbConnect()
  try {
    await client.query(QUERY_STRING, [workOrderCode, statusId])
    res.status(200).send(`Status modified with order code: ${workOrderCode}`)
  }
  catch(err) {
    throw err
  }
  finally {
    client.release()
  }
}

module.exports = updateOrderStatus