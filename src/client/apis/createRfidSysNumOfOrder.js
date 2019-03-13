
import axios from 'axios'

const createRfidSysNumOfOrder = async(workOrderCode, rfidSysNum) => {
  try {
    const body = {
      workOrderCode,
      rfidSysNum
    }
    // const res = await axios.post(`http://localhost:8000/api/db/rfid/`, body)
    const res = await axios.post(`/api/db/rfid/`, body)
    const result = res.data
    return result
  }
  catch (err) {
    console.error(`Error is: ${err}`)
  }
}

export default createRfidSysNumOfOrder