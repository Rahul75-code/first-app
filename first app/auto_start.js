var AutoLaunch = require('auto-launch');
 
var trayapp = new AutoLaunch({
    name: 'tray',
    path: '\tray\tray-win32-x64\tray.app',
});
 
trayapp.enable();
 
//minecraftAutoLauncher.disable();
 
 
trayapp.isEnabled()
.then(function(isEnabled){
    if(isEnabled){
        return;
    }
    trayapp.enable();
})
.catch(function(err){
    // handle error
});