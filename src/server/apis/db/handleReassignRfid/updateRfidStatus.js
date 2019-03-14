const dbConnect = require('../dbConnect')

const QUERY_STRING = 
`
  UPDATE rfid 
  SET 
    enable_var = $1
    
  WHERE rfid_code = $2
`

const updateRfidStatus = async(req, res) => {
  const rfidCode = req.params.rfidCode
  const { enableVar } = req.body
  const client = await dbConnect()
  return (
    async () => {
      try {
        await client.query(QUERY_STRING, [enableVar, rfidCode])
        res.status(200).send(
          `RFID code ${rfidCode} status is ${enableVar}`
        )
      } finally {
        client.release()
        console.log('Db released')
      }
    }
  )().catch(e => console.error(e.message, e.stack))
}

// const updateRfidStatus = async(req, res) => {
//   const rfidCode = req.params.rfidCode
//   const { enableVar } = req.body
//   const client = await dbConnect()
//   try {
//     await client.query(QUERY_STRING, [enableVar, rfidCode])
//     res.status(200).send(
//       `RFID code ${rfidCode} status is ${enableVar}`
//     )
//   }
//   catch(err) {
//     throw err
//   }
//   finally {
//     client.release()
//     console.log('Db released')
//   }
// }

module.exports = updateRfidStatus