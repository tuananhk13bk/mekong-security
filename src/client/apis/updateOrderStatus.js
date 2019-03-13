

import axios from 'axios'

const updateOrderStatus = async(workOrderCode, statusId) => {
  try {

    // const res = await axios.put(
    //   `http://localhost:8000/api/db/order/${workOrderCode}`,
    //   { statusId }
    // )
    const res = await axios.put(
      `/api/db/order/${workOrderCode}`,
      { statusId }
    )
    return res
  }
  catch (err) {
    console.error(`Error is: ${err}`)
  }
}

export default updateOrderStatus