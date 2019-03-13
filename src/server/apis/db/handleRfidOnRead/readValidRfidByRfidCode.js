const dbConnect = require('../dbConnect')
const camelcaseKeys = require('camelcase-keys')

const QUERY_STRING = 
`
SELECT rfid_code FROM rfid
WHERE 
  enable_var = FALSE
  AND rfid_sys_num IS NULL
  AND rfid_code = $1
  AND lost = FALSE
`

const readValidRfidByRfidCode = async(req, res) => {
  const rfidCode = parseInt(req.params.rfidCode)
  if (!rfidCode) {
    res.json([])
    return
  }
  const client = await dbConnect()
  return (
    async () => {
      try {
        const result = await client.query(QUERY_STRING,[rfidCode])
        res.status(200).json(camelcaseKeys(result.rows))
      } finally {
        client.release()
        console.log('Db released')
      }
    }
  )().catch(e => console.error(e.message, e.stack))
}

module.exports = readValidRfidByRfidCode