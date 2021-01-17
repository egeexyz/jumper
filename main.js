const { app, BrowserWindow } = require('electron')
const path = require('path')
const url = require('url')

let win

function createWindow () {
  win = new BrowserWindow({
    width: 820,
    height: 620,
    icon: path.join(__dirname, 'public/favicon.ico')
  })
  win.setMenu(null)

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
