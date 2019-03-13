

import axios from 'axios'

const updateRfidSysNumInRfid = async(rfidCode, rfidSysNum, enableVar) => {
  try {
    const body = {
      rfidSysNum,
      enableVar
    }
    // const res = await axios.put(
    //   `http://localhost:8000/api/db/rfid/${rfidCode}`, body
    // )
    const res = await axios.put(
      `/api/db/rfid/${rfidCode}`, body
    )
    return res
  }
  catch (err) {
    console.error(`Error is: ${err}`)
  }
}

export default updateRfidSysNumInRfid