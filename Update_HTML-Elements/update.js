console.log("JS Loaded");


var countdownElement=document.getElementById('countdown');

var initailCountdownVal=countdownElement.innerHTML;

var bgImageElement=document.getElementById('bg-img');

console.log(bgImageElement.src);

setInterval(function(){

    initailCountdownVal = initailCountdownVal > 0 ? initailCountdownVal - 1 : 0;
    
    countdownElement.innerHTML=initailCountdownVal;
    
    var bgImgPath = initailCountdownVal % 2 === 0 ? '/yuji wallpaper.jpeg' : '/Denji wallpaper.jpeg'
    bgImageElement.src=bgImgPath;

},2000)
