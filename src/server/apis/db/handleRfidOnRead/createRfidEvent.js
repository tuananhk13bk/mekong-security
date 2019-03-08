const dbConnect = require('../dbConnect')

const QUERY_STRING = 
`
INSERT INTO rfid_events (rfid_tag_num, rfid_reader_code, read_date_time)
VALUES ($1, $2, $3)
`

async function createRfidEvent(client, [rfidTagNum, rfidReaderCode, readDateTime]) {
  const client = await dbConnect()
  try {
    await client.query(QUERY_STRING, [rfidTagNum, rfidReaderCode, readDateTime])
    return `RFID event created with tag number: ${rfidTagNum}`
  }
  catch(err) {
    throw err
  }
}

module.exports = createRfidEvent