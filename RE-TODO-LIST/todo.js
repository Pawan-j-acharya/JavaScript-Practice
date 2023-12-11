var todoInputEle = document.getElementById('todoInput')

var addBtnEle = document.getElementById('addBtn')

var updateBtnEle = document.getElementById('updateBtn')

var removeBtnEle = document.getElementById('removeBtn')

var todoListEle = document.getElementById('todo-list')



//assign user input newly created a variable
var currTodoInput = '';

todoInputEle.addEventListener('input', function (e) {

    currTodoInput = e.target.value;

})

//create HTML Element using DOM Manipulation

function createHtmlElement() {
    var newHtmlElement = document.createElement('li')

    var divHtmlElement = document.createElement('div')

    divHtmlElement.id = 'todo-item';

    var textNode = document.createTextNode(currTodoInput)

    divHtmlElement.appendChild(textNode)

    var iconHtmlElement = document.createElement('i')

    iconHtmlElement.classList.add('fa-solid', 'fa-trash');

    newHtmlElement.appendChild(divHtmlElement)

    newHtmlElement.appendChild(iconHtmlElement)

    newHtmlElement.id = 'item' + (todoListEle.childElementCount + 1);

    return newHtmlElement

}


//Event listner for add todo item

addBtnEle.addEventListener('click', addTodoInputToList)

//add todo input incase user presses the enter button

todoInputEle.addEventListener('keyup', function (e) {

    if (e.keyCode === 13) {
        addTodoInputToList()
    }

})


//adding  todo input to the list
function addTodoInputToList() {

    if (currTodoInput !== undefined && currTodoInput !== null && currTodoInput !== '') {

        // var newTodoElement = createHtmlElement()

        // todoListEle.appendChild(newTodoElement)
        
        createTODOItemInBackend()    //calling createTODOItemInBackend function to store the user input in backend

        // currTodoInput = '';

        // todoInputEle.value = '';

    }
    else {
        alert("Enter Valid Todo input text")
    }

}


//update function for updating first item in the list

updateBtnEle.addEventListener('click', function () {
    if (currTodoInput !== undefined && currTodoInput !== null && currTodoInput !== '') {

        var oldTodoElement = todoListEle.firstChild;

        var newTodoElement = createHtmlElement()

        todoListEle.replaceChild(newTodoElement, oldTodoElement)

        currTodoInput = '';

        todoInputEle.value = '';
    }
    else {
        alert("Enter Valid Todo input text")
    }

});


//remove function for removing an existing item in the list

removeBtnEle.addEventListener('click', function () {

    var firstTodoItem = todoListEle.firstChild;

    todoListEle.removeChild(firstTodoItem);

})

//remove an exiting item using delete icon

var deleteIconEle = document.querySelectorAll('.fa-trash');

console.log(deleteIconEle)

deleteIconEle.forEach(item => {

    item.addEventListener('click', function (e) {

        var parentElement = e.target.parentElement;

        todoListEle.removeChild(parentElement);

    })

});

//fetch data from the backend using XML HTTP Request

function getTODOListFromBackend() {


    $.get('https://jsonplaceholder.typicode.com/todos',function(data,status){

        var response=data;
        for(var i=0;i<response.length;i++)
        {
            todoListEle.append(createTODODynamically(response[i].id,response[i].title));
        }

    })

    // var http = new XMLHttpRequest;
    // http.onreadystatechange = function () {
    //     if (this.readyState === 4) {
    //         if (this.status === 200) {
    //             var response = JSON.parse(this.responseText);

    //             for (var i = 0; i < response.length; i++) {
    //                 todoListEle.appendChild(createTODODynamically(response[i].id, response[i].title));
    //             }
    //         }
    //         else {
    //             console.log("call failed!!")
    //         }

    //     }
    // }
    // http.open('GET', 'https://jsonplaceholder.typicode.com/todos', true);
    // http.send();

}


//calling the getTODOListFromBackend function

getTODOListFromBackend()



//creating a todo list for new todo from backend dynamically

function createTODODynamically(id, title) {

  //  console.log("createTODODynamically function is called!! and the title is :"+title)

    var newHtmlElement = document.createElement('li')

    var divHtmlElement = document.createElement('div')

    divHtmlElement.id = 'todo-item';

    var textNode = document.createTextNode(title)

    divHtmlElement.appendChild(textNode)

    var iconHtmlElement = document.createElement('i')

    iconHtmlElement.classList.add('fa-solid', 'fa-trash');

    newHtmlElement.appendChild(divHtmlElement)

    newHtmlElement.appendChild(iconHtmlElement)

    newHtmlElement.id = 'item' + id;

    return newHtmlElement

}


// storing a user provided todo input in to the backend

function createTODOItemInBackend() {

    //console.log("todo input :"+currTodoInput);

    var obj = {
        "userId": 1,
        "title": currTodoInput,
        "completed": false
    };

    $.post('https://jsonplaceholder.typicode.com/todos',obj,function(data,status){

        var repsonse=data;

        for(var i=0;i<response.length;i++)
        {
            todoListEle.append(createTODODynamically(response[i].id,currTodoInput));
        }
    
    })


    
    // var http = new XMLHttpRequest();
    // http.onreadystatechange = function () {
    //     if (this.readyState === 4) {
    //         if (this.status === 201) {
    //             var response = JSON.parse(this.responseText);
    //             todoListEle.appendChild(createTODODynamically(response.id,currTodoInput))

    //             currTodoInput = '';

    //             todoInputEle.value = '';
    //         }
    //         else {
    //             console.log("call failed!!")
    //         }

    //     }
    // }
    // http.open('POST', 'https://jsonplaceholder.typicode.com/todos', true);
    // var obj = JSON.stringify({
    //     "userId": 1,
    //     "title": currTodoInput,
    //     "completed": false
    // });
    // http.send(obj);

}









