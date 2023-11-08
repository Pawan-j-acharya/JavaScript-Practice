var count=0;

var gritItemElement=document.querySelectorAll('.gridItem');

var currPlayerElement=document.getElementById('currPlayer');


function canClick(event){

        var divBox=event.target;

        if(divBox.getAttribute("data-clicked") === "true")
        {
            return;
        }
        appendUserMark(event);
        divBox.setAttribute("data-clicked","true");
}



function appendUserMark(event)
{
    count+=1;

    if(count>9)
    {
        resetGame();
        return;
    }

    

    if(count%2 === 0)
    {
        event.target.innerHTML="O";
        currPlayerElement.innerHTML="Player X turn";
        return;
    }
    event.target.innerHTML="X";
    currPlayerElement.innerHTML="Player O turn";
   
    
   
}


function resetGame()
{
    var Divs=document.querySelectorAll('.gridItem')

    Divs.forEach(div => {

        div.innerHTML='';
        div.setAttribute("data-clicked","false");
        
    });

    currPlayerElement.innerHTML="Player X turn";
    count=0;
}