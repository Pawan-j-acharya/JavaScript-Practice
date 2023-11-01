var btn=document.getElementById('buttonEle');

var headerElement = document.querySelector('container');

function onBtnClick(){

   // var randomNum = Math.floor(Math.random() *255);
   // alert("Button clicked");


    // alert("rgb(" + Math.floor(Math.random() *255) + "," + Math.floor(Math.random() *255)
    //  + "," + Math.floor(Math.random() *255) + ")");


    // headerElement.style.backgroundColor = "rgb(" + Math.floor(Math.random() *255) + "," + Math.floor(Math.random() *255)
    // + "," + Math.floor(Math.random() *255) + ");"


    headerElement.style.backgroundColor = "rgb("+ Math.floor(Math.random() *255) + "," + Math.floor(Math.random() *255) + "," + 
    Math.floor(Math.random() *255) + ");"

    // alert("rgb("+ Math.floor(Math.random() *255) + "," + Math.floor(Math.random() *255) + "," + 
    // Math.floor(Math.random() *255) + ")");

}

// btn.onclick = onBtnClick;

btn.addEventListener('click',onBtnClick);