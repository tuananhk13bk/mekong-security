
const dbConnect = require('../dbConnect') 

const QUERY_STRING = 
`
  INSERT INTO rel_rfid_sys_num_and_work_order (work_order_code, rfid_sys_num)
  VALUES($1, $2)  
`

const createRfidSysNumOfOrder = async(req, res) => {
  const { workOrderCode, rfidSysNum } = req.body
  const client = await dbConnect()
  return (
    async () => {
      try {
        await client.query(QUERY_STRING, [workOrderCode, rfidSysNum])
        res.status(200).send(
          `RFID System Number of order: ${workOrderCode} is created ${rfidSysNum}`
        )
      } finally {
        client.release()
        console.log('Db released')
      }
    }
  )().catch(e => console.error(e.message, e.stack))
}

module.exports = createRfidSysNumOfOrder