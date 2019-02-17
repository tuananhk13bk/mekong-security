// Declare my server
const express = require('express')
const app = express()
const server = require('http').createServer(app)
// Declare middleware
const bodyParser = require('body-parser')
// convert buffer to string utf8
const StringDecoder = require('string_decoder').StringDecoder
const decoder = new StringDecoder('utf8')
// Call my database API
const db = require('./apis/postgresQueries')
// Declare socket.io, emit an event to client when COM port has data
const io = require('socket.io')(server)
// Declare serial port
// const SerialPort = require('serialport')
// const port = new SerialPort('COM7', {
//   baudRate: 9600
// })

// use body-parser
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
)

// Use static file (build from React)
app.use(express.static('./dist'))

// Test server response
app.get('/api/db/get/all-order', db.getAllOrder)
app.put('/api/db/put/:id', db.updateOrderStatus)
// app.put('api/db/put/:id', (req, res) => {
//   res.end('aaaaa')
// })
// send data to React client when COM port has data
// port.on('data', data => io.emit('data', decoder.end(data)))

// server listen on port ...
server.listen(8000)
