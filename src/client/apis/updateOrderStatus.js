

async function updateOrderStatus(workOrderCode, statusId) {
  try {
    // await fetch(`/api/db/put/order/${workOrderCode}`, {
      await fetch(`http://localhost:8000/api/db/put/order/${workOrderCode}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(statusId)
    })
  }
  catch (err) {
    console.error(`Error is: ${err}`)
  }
}

export default updateOrderStatus