
import axios from 'axios'

const readAllOrder = async(orderStatusId1, orderStatusId2, arrivalDate) => {
  try {
    const body = {
      orderStatusId1, 
      orderStatusId2, 
      arrivalDate
    }
    // const res = await axios.post(`http://localhost:8000/api/db/all-order/`, body)
    const res = await axios.post(`/api/db/all-order/`, body)
    const result = res.data
    return result
  }
  catch (err) {
    console.error(`Error is: ${err}`)
  }
}

export default readAllOrder