function fn1(){
    Notification.requestPermission().then(function(result){
        
        var mynotify = new Notification('tray Notification !',{
            'body':'notification there!',
            'icon':'tray.png'
            
        });

        win = new BrowserWindow ({
            width:600, height:500, icon:iconPath
        })
        mynotify.onclick = () => {
            console.log('tray notification is working');
            
        }
        setTimeout(mynotify.close.bind(mynotify), 10000);


    });

};

