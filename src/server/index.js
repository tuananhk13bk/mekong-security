// Declare my server
const express = require('express')
const app = express()
const server = require('http').createServer(app)
// Declare middleware
const bodyParser = require('body-parser')
// import APIs
const {
  readAllOrder,
} = require('./apis/db')
const {
 createRfidEvent,
 createRfidSysNumOfOrder,
 updateOrderStatus,
 updateRfidSysNumInRfid,
 readValidRfidByRfidCode
} = require('./apis/db/handleRfidOnRead')

const {
  updateRfidStatus,
 } = require('./apis/db/handleReassignRfid')
// Declare socket.io, emit an event to client when COM port has data
// const io = require('socket.io')(server)
// use body-parser
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
)

// Use static file (build from React)
app.use(express.static('./dist'))

// route
app.post('/api/db/all-order/', readAllOrder)

app.put('/api/db/order/:workOrderCode', updateOrderStatus)

app.get('/api/db/rfid/:rfidCode', readValidRfidByRfidCode)

app.post('/api/db/rfid-event', createRfidEvent)

app.post('/api/db/rfid', createRfidSysNumOfOrder)

app.put('/api/db/rfid/:rfidCode', updateRfidSysNumInRfid)


// send data to React client when COM port has data
// port.on('data', data => io.emit('data', decoder.end(data)))

// server listen on port ...
server.listen(8000)
