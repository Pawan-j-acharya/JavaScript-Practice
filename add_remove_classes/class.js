var selectedElement = document.getElementById('heading');

selectedElement.classList.add('bigFont');

var btn=document.getElementById('buttonEle');

btn.addEventListener('click',function()
{
    selectedElement.classList.remove('bigFont');
})

// setTimeout(function()
// {
//     selectedElement.classList.remove('bigFont');
// },3000);

var menuButtonElement = document.getElementById('menubtn');

var menuSidebar = document.getElementById('sidebar');

menuButtonElement.addEventListener('click',function(){

    if(menuSidebar.classList.contains('hide'))
    {
        menuSidebar.classList.remove('hide');
        menuSidebar.classList.add('show');
    }
    else
    {
        menuSidebar.classList.remove('show');
        menuSidebar.classList.add('hide');
    }

    



})