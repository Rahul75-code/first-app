const electron = require('electron');


const {app, Tray, Menu, BrowserWindow} = electron
const path = require('path')
const url = require('url')

const iconPath = path.join(__dirname,'tray.png')

let win;
function createWindow(){
    win = new BrowserWindow ({
        width:600, height:500, icon:iconPath
    })
    win.loadFile('tray.html')
    var appIcon = new Tray(iconPath)
    var contextMenu = Menu.buildFromTemplate([{
        label:'show App', click: function(){
            win.show()
        }
    },
    {
        label:'quit',click: function(){
            app.isQuiting = true
            app.quit()
        }
    }
 ])
 appIcon.setContextMenu(contextMenu)

 win.on('close',function(event){
     win= null
 })
 win.on('minimize',function(event){
   // event.preventDefault()
  //  win.hide()
 })

 win.on('show',function(){
     appIcon.setHighlightMode('always')
 })
}


app.on('ready', createWindow)
