const dbConnect = require('../dbConnect')

const QUERY_STRING = 
`
UPDATE rfid 
SET 
  rfid_sys_num = $1, 
  enable_var = $2, 
  lost = $3
WHERE rfid_code = $4
`

const updateRfidSysNumInRfid = async(req, res) => {
  const rfidCode = req.params.rfidCode
  const { rfidSysNum, enableVar, lost } = req.body
  const client = await dbConnect()
  return (
    async () => {
      try {
        await client.query(QUERY_STRING, [rfidSysNum, enableVar, lost, rfidCode])
        res.status(200).send(
          `RFID code ${rfidCode} is assigned to RFID System Number: ${rfidSysNum}`
        ) 
      } finally {
        client.release()
        console.log('Db released')
      }
    }
  )().catch(e => console.error(e.message, e.stack))
}

module.exports = updateRfidSysNumInRfid