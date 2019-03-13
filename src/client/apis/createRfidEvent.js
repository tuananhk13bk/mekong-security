
import axios from 'axios'

const createRfidEvent = async(rfidCode, rfidReaderCode, readDateTime) => {
  try {
    const body = {
      rfidCode,
      rfidReaderCode,
      readDateTime
    }
    // const res = await axios.post(`http://localhost:8000/api/db/rfid-event`, body)
    const res = await axios.post(`/api/db/rfid-event`, body)
    const result = res.data
    return result
  }
  catch (err) {
    console.error(`Error is: ${err}`)
  }
}

export default createRfidEvent