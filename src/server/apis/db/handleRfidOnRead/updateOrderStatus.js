const dbConnect = require('../dbConnect')

const QUERY_STRING = `UPDATE work_order SET status_id = $2 WHERE work_order_code = $1`

const updateOrderStatus = async(req, res) => {
  const workOrderCode = req.params.workOrderCode
  const { statusId } = req.body
  const client = await dbConnect()
  return (
    async () => {
      try {
        await client.query(QUERY_STRING, [workOrderCode, statusId])
        res.status(200).send(`Status modified with order code: ${workOrderCode}`)
      } finally {
        client.release()
        console.log('Db released')
      }
    }
  )().catch(e => console.error(e.message, e.stack))
}

module.exports = updateOrderStatus