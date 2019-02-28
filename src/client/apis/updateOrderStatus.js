

async function updateOrderStatus(id, data) {
  try {
    await fetch(`/api/db/put/${id}`, {
      // await fetch(`http://localhost:8000/api/db/put/${id}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
  }
  catch (err) {
    console.error(`Error is: ${err}`)
  }
}

export default updateOrderStatus