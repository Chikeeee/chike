function animate(obj,target,callback){
    clearInterval(obj.timer);//先清除以前的定时器，只保留一个定时器
    obj.timer = setInterval(function(){
    var step=(target-obj.offsetLeft)/10;
    step=step>0?Math.ceil(step):Math.floor(step);
    if(obj.offsetLeft==target){
        clearInterval(obj.timer);
        // if(callback){
        //     callback();
        // }
        callback && callback();//如果callbak存在，就调用callback
    }
    obj.style.left=obj.offsetLeft+step+'px';
},80);
}