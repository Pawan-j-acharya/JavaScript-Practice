var count=0;

var gritItemElement=document.querySelectorAll('.gridItem');

var currPlayerElement=document.getElementById('currPlayer');



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
        
    });

    currPlayerElement.innerHTML="Player X turn";
    count=0;
}