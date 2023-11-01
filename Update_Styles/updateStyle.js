console.log("JS Loaded");


var selectHtmlElement=document.getElementById('countdown');

var content=selectHtmlElement.innerHTML;



setInterval(function(){

    content = content > 0 ? content-1 : 0; 

    selectHtmlElement.innerHTML=content;

    selectHtmlElement.style.fontSize = content * 100 + "px";
    
},1000)