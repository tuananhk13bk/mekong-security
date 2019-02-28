const dbConnect = require('../dbConnect')
const createRfidEvent = require('./createRfidEvent')
const createRfidSysNumOfOrder = require('./createRfidSysNumOfOrder')

async function handleRfidOnRead(req, res) {
  const rfidTagNum = req.params.rfidTagNum
  const { workOrderCode, rfidReaderCode, readDateTime } = req.body
  const client = await dbConnect()

  // excute and get response
  const createRfidEventResponse = await createRfidEvent(
    client, [rfidTagNum, rfidReaderCode, readDateTime]
  )
  // excute and get response
  const createRfidSysNumOfOrderResponse = await createRfidSysNumOfOrder(
    client, [rfidTagNum, workOrderCode]
  )

  // merge response from all async function
  res.status(200).send(
    `${createRfidEventResponse}. ${createRfidSysNumOfOrderResponse}.`
  )

  client.release()
}

module.exports = handleRfidOnRead