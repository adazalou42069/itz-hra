
const {
    app,
    BrowserWindow
} = require('electron')

let win

function createWindow() {
    // Create the browser window.
    win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    })


    win.loadFile('.. / public / index.html')
 
    win.webContents.openDevTools()
    
    win.on('closed', () => {  
        win = null
    })
}


app.on('ready', createWindow)

app.on('window-all-closed', () => {
  
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (win === null) {
        createWindow()
    }
})


