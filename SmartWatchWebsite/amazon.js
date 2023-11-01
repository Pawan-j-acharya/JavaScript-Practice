var smartWatchImgElement=document.getElementById('smartwatch-img')

var firstColorElement=document.getElementById('color-1')

firstColorElement.addEventListener('click',function(){

    var redWatchImgPath='/SmartWatchWebsite/smartwatch-imgs/redSmartWatch.png';

    smartWatchImgElement.src=redWatchImgPath;

})


var secondColorElement=document.getElementById('color-2')

secondColorElement.addEventListener('click',function(){

    var blueWatchImgPath='/SmartWatchWebsite/smartwatch-imgs/blueSmartWatch.png';

    smartWatchImgElement.src=blueWatchImgPath;

})

var thirdColorElement=document.getElementById('color-3')

thirdColorElement.addEventListener('click',function(){

    var blackWatchImgPath='/SmartWatchWebsite/smartwatch-imgs/blackSmartWatch.png';

    smartWatchImgElement.src=blackWatchImgPath;

})

var fourthColorElement=document.getElementById('color-4')

fourthColorElement.addEventListener('click',function(){

    var purpleWatchImgPath='/SmartWatchWebsite/smartwatch-imgs/purpleSmartWatch.png';

    smartWatchImgElement.src=purpleWatchImgPath;

})

var fifthColorElement=document.getElementById('color-5')

fifthColorElement.addEventListener('click',function(){

    var pinkWatchImgPath='/SmartWatchWebsite/smartwatch-imgs/pinkSmartWatch.png';

    smartWatchImgElement.src=pinkWatchImgPath;

})


var timeElement=document.getElementById('time');

var currentTimeValue=timeElement.innerHTML;

const now=new Date();

const currentTime=now.toLocaleTimeString();

var textNOde=document.createTextNode(currentTime);

timeElement.appendChild(textNOde);



var heartRateElement =document.getElementById('hearRate');



var timeBtnElement=document.getElementById('time-btn');

var heartRateBtnElement=document.getElementById('hearBeat-btn');



timeBtnElement.addEventListener('click',function(){

    timeElement.classList.remove('hide');
    heartRateBtnElement.classList.remove('show');
    heartRateElement.classList.add('hide');
    timeElement.classList.add('show');
})



heartRateBtnElement.addEventListener('click',function(){

    heartRateElement.classList.remove('hide');
    timeElement.classList.remove('show');
    timeElement.classList.add('hide');
    heartRateElement.classList.add('show');  
})


var buyBtnElement=document.getElementById('buy-btn')

buyBtnElement.addEventListener('click',function(){

    alert("Product has been added to cart!");
})




