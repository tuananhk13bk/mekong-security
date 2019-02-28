// Declare my server
const express = require('express')
const app = express()
const server = require('http').createServer(app)
// Declare middleware
const bodyParser = require('body-parser')
// import APIs
const { readAllOrder, 
        updateOrderStatus,
        handleRfidOnRead
      } = require('./apis/db')
// Declare socket.io, emit an event to client when COM port has data
const io = require('socket.io')(server)
// use body-parser
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
)

// Use static file (build from React)
app.use(express.static('./dist'))

// server response
app.get('/api/db/get/all-order', readAllOrder)
app.put('/api/db/put/:id', updateOrderStatus)
app.post('/api/db/post/:rfidTagNum', handleRfidOnRead)
// send data to React client when COM port has data
// port.on('data', data => io.emit('data', decoder.end(data)))

// server listen on port ...
server.listen(8000)
