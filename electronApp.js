const electron = require('electron')
const path = require('path')

// import server file
require('./src/server/index.js')

// Declare electron components
const { app, BrowserWindow } = electron
// Init main window
let mainWindow

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 1024,
    height: 600,
  })
  mainWindow.setMenu(null)
  // mainWindow.loadURL('http://localhost:8000/')
  mainWindow.loadURL(path.join(__dirname, '/dist/index.html'))
  mainWindow.focus()
  // Emitted when the window is closed
  mainWindow.on('closed', () => {
    mainWindow = null
  })
})

app.on('window-all-closed', () => {
  if(process.platform !== 'darwin') {
    app.quit()
  }
})
