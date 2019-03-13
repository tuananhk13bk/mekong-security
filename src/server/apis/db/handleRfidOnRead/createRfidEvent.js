const dbConnect = require('../dbConnect')

const QUERY_STRING = 
`
INSERT INTO rfid_events (rfid_code, rfid_reader_code, read_date_time)
VALUES ($1, $2, $3)
`

const createRfidEvent = async(req, res) => {
  const { rfidCode, rfidReaderCode, readDateTime } = req.body
  const client = await dbConnect()
  return (
    async () => {
      try {
        await client.query(QUERY_STRING, [rfidCode, rfidReaderCode, readDateTime])
        res.status(200).send(`RFID event created with rfid code: ${rfidCode}`) 
      } finally {
        client.release()
        console.log('Client released')
      }
    }
  )().catch(e => console.error(e.message, e.stack))
}

module.exports = createRfidEvent