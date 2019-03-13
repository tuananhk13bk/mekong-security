
import axios from 'axios'

const readValidRfidByRfidCode = async(rfidCode) => {
  try {
    // const res = await axios.get(`http://localhost:8000/api/db/rfid/${rfidCode}`)
    const res = await axios.get(`/api/db/rfid/${rfidCode}`)
    let result = res.data
    if (result.length === 0) {
      result = null
    } else {
      result = res.data[0]['rfidCode']
    }
    return result
  }
  catch (err) {
    console.error(`Error is: ${err}`)
  }
}

export default readValidRfidByRfidCode