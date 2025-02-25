//document.getElementsByTagName('p')[0].innerHTML=new Data().tolocaltimestrong();
setInterval(() => {
    //let ct=new Data().tolocaltimestring();
    document.getElementsByTagName('p')[0].innerHTML=new Date().toLocaleTimeString();
},1000);