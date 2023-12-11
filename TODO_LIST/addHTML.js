var input=document.getElementById('todoInput')

var addBtn=document.getElementById('addBtn');

var updateBtn=document.getElementById('updateBtn');

var removeBtn=document.getElementById('removeBtn');

var todoList=document.getElementById('todo-list')

//var firstItem=document.getElementById('firstItem')

var currentInputValue='';
input.addEventListener('input',function(e){
    console.log(e.target.value);
    currentInputValue=e.target.value;
})

addBtn.addEventListener('click',createTODOItemAtBackend);

input.addEventListener('keyup',function(e){

    if(e.keyCode === 13)
    {
        addListItem();
    }
});

function createNode(){

    var newListElement=document.createElement('li')

    //var textNode=document.createTextNode('List Item '+ (todoList.childElementCount+1))
    var textNode=document.createTextNode(currentInputValue)

    newListElement.appendChild(textNode);

    newListElement.id='Item'+ (todoList.childElementCount+1);

   // console.log(newListElement);

    return newListElement
 }

function addListItem(){

    if(currentInputValue !==undefined && currentInputValue!==null && currentInputValue!=='')
    {

    var newListElement=createNode();   

    todoList.appendChild(newListElement);

    input.value ='';
    currentInputValue='';

    //todoList.insertBefore(newListElement,firstItem);

   // var firstEleChild=todoList.firstElementChild;

    //todoList.insertBefore(newListElement,firstEleChild);

    }
    else{
        alert('Please enter a valid todo text!!');
    }
}


updateBtn.addEventListener('click',function()
{
    if(currentInputValue!==undefined && currentInputValue!==null && currentInputValue!=='')
    {
        var firstItem=todoList.firstElementChild;

        var newListElement=createNode();

        todoList.replaceChild(newListElement,firstItem);

    }
    else
    {
        alert('Please enter a valid todo text!!');
    }
    

    


})

removeBtn.addEventListener('click',function(){


    var firstItem=todoList.firstElementChild;

    todoList.removeChild(firstItem);
})

var iconAll=document.querySelector('.fa-solid fa-trash')

// iconAll.forEach(function(icon){
//     trashIcon(icon);
// })

// function trashIcon(icon)
// {
//      icon.addEventListener('click',function(){
//         var listItem=icon.parentNode.parentNode;
//         todoList.removeChild(listItem);
//      })
// }

var dltBtn=document.getElementById('dltIcon');

dltBtn.addEventListener('click',function()
{
    var elementToBeRemoved=dltBtn.parentNode;
    todoList.removeChild(elementToBeRemoved);
})

function createTODODynamically(id,title){

    var newListElement=document.createElement('li')

    var textNode=document.createTextNode(title)

    newListElement.appendChild(textNode);

    newListElement.id=id;

    return newListElement
}

function getTODOListFromBackend(){

    var http = new XMLHttpRequest();
    http.onreadystatechange = function(){
        if(this.readyState === 4)
        {
            if(this.status === 200)
            {
                var response=JSON.parse(this.responseText);
                for(var i=0;i<response.length;i++)
                {
                    todoList.appendChild(createTODODynamically(response[i].id,response[i].title))
                }
            }
            else
            {
                console.log('Call Failed');
            }
        }
    }
    http.open('GET','https://jsonplaceholder.typicode.com/todos',true);
    http.send();
}
 
getTODOListFromBackend()

addBtn.addEventListener('click',createTODOItemAtBackend)

function createTODOItemAtBackend()
{
    var http=new XMLHttpRequest();
    http.open('POST','https://jsonplaceholder.typicode.com/todos',true);
    http.onreadystatechange = function(){
        if(this.readyState === 4)
        {
            if(this.status === 201)
            {
                var response=JSON.parse(this.responseText);
                todoList.appendChild( createTODODynamically(response.id,currentInputValue));
                 console.log("list added");
            }
            else
            {
                console.log('Call Failed');
            }
        }
    }
    var obj =JSON.stringify({
        "userId": 1,
        "title": currentInputValue,
        "completed": false
      })
    http.send(obj);
    
}










