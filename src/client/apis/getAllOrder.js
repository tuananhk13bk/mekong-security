
async function getAllOrder() {
  try {
    // let res = await fetch('http://localhost:8000/api/db/get/all-order')
    let res = await fetch('/api/db/get/all-order')
    let resJson = await res.json()
    return resJson
  }
  catch (err) {
    console.error(`Error is: ${err}`)
  }
}

export default getAllOrder