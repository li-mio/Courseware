this.onmessage=function(ev){
    var data=ev.data;
    data+='nihao';
    this.postMessage(data);
};