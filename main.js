const { app, BrowserWindow, Menu } = require('electron')
const path = require('path')
const url = require('url')

let win

function createWindow () {
  Menu.setApplicationMenu(null)
  win = new BrowserWindow({
    width: 820,
    height: 620,
    icon: path.join(__dirname, 'public/favicon.ico')
  })
  win.loadURL(url.format({
    pathname: path.join(__dirname, 'public/index.html'),
    protocol: 'file:',
    slashes: true
  }))

  win.on('closed', () => {
    win = null
  })
}

app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  app.quit()
})

app.on('activate', () => {
  createWindow()
})
