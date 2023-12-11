var cartWrapperElement=document.getElementById('cart-wrapper');

var bookCount=0;

let totalAmount=0;

var helloEle=document.getElementsByClassName('.hello');

function sayingHello(event){
    alert("hello");
}


helloEle.addEventListener('click',sayingHello);




//book 1 cart button scriptscode
var cartBtn1=document.querySelector('.order-btn-1');

cartBtn1.addEventListener('click',function(){

        if(cartWrapperElement.childElementCount > 5){
alert('cart is full!!');
return;
}


const childrens =document.querySelectorAll('.book1Child');
addToCart(childrens);

})


//book 2 cart button scriptscode
var cartBtn2=document.querySelector('.order-btn-2');

cartBtn2.addEventListener('click',function(){

if(cartWrapperElement.childElementCount > 5){
alert('cart is full!!');
return;
}

const childrens =document.querySelectorAll('.book2Child');
addToCart(childrens);

})


//book 3 cart button scriptscode
var cartBtn3=document.querySelector('.order-btn-3');

cartBtn3.addEventListener('click',function(){

if(cartWrapperElement.childElementCount > 5){
alert('cart is full!!');
return;
}

const childrens =document.querySelectorAll('.book3Child');
addToCart(childrens);

})




// create an html elemeent and adding the book info funtion

function addToCart(childrens){

var newDivElement=document.createElement('div');

newDivElement.id = 'bookInfoWrapper';

bookCount++;
        



        var bookInfoElement=document.createElement('div');

bookInfoElement.id = 'cart-book-info';

var InfoTextNode=document.createTextNode(childrens[0].innerHTML+","+childrens[1].innerHTML);

let boodId = 'book'+bookCount+

        // sessionStorage.setItem("'book'+bookCount+')

        // bookInfoElement.appendChild(InfoTextNode);



var bookPriceElement=document.createElement('div');

bookPriceElement.id = 'cart-book-price';

var PriceTextNode=document.createTextNode(childrens[2].innerHTML)

bookPriceElement.appendChild(PriceTextNode);



    
newDivElement.appendChild(bookInfoElement);

newDivElement.appendChild(bookPriceElement);

cartWrapperElement.appendChild(newDivElement);




// bookCount++;
let priceString=childrens[2].innerHTML;
totalAmount+=parseInt(priceString.slice(3));


    


document.querySelector('.numberOfBooks').value=bookCount;

        document.querySelector('.totalAmount').value="Rs."+totalAmount;


}









 