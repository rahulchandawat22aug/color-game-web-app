var h1=document.querySelector("h1");
var color=generatecolor(6);
var squares=document.querySelectorAll(".square")
var colorpicked=pickcolor();
var colordisplay=document.getElementById("colordisplay");
var messagedisplay=document.querySelector("#message");
var newcolorbutton=document.querySelector("#newcolor");
var easybtn=document.querySelector("#easybtn");
var hardbtn=document.querySelector("#hardbtn");
var difficulty="hard";

easybtn.addEventListener("click", function(){
    difficulty="easy";
    easybtn.classList.add("selected");
    hardbtn.classList.remove("selected");
    color=generatecolor(3);
    colorpicked=pickcolor();
    colordisplay.textContent=colorpicked;
    for(var i=0;i<squares.length;i++)
    {
        if(color[i])
        {
            squares[i].style.backgroundColor=color[i];
        }
        else
        {
            squares[i].style.display="none";
        }
    }
});

hardbtn.addEventListener("click", function(){
    difficulty="hard";
    easybtn.classList.remove("selected");
    hardbtn.classList.add("selected");
    color=generatecolor(6);
    colorpicked=pickcolor();
    colordisplay.textContent=colorpicked;
    for(var i=0;i<squares.length;i++)
    {
        squares[i].style.backgroundColor=color[i];
        squares[i].style.display="block";
    }
});

newcolorbutton.addEventListener("click", function(){
if(difficulty==="hard")
{
    color=generatecolor(6);
    colorpicked=pickcolor();
    colordisplay.textContent=colorpicked;
    h1.style.backgroundColor="steelblue";
    newcolorbutton.textContent="New Colors";
    messagedisplay.textContent="";
    for(var i=0; i<squares.length;i++)
    {
        squares[i].style.backgroundColor=color[i];
        squares[i].style.display="block";
    }
    h1.style.backgroundColor
}
else{
    color=generatecolor(3);
    colorpicked=pickcolor();
    colordisplay.textContent=colorpicked;
    h1.style.backgroundColor="steelblue";
    newcolorbutton.textContent="New Colors";
    messagedisplay.textContent="";
    for(var i=0; i<squares.length;i++)
    {
        if(color[i])
        {
        squares[i].style.backgroundColor=color[i];
        }
        else
        {
            squares[i].style.display="none";
        }
    }
    h1.style.backgroundColor
}
});

colordisplay.textContent=colorpicked;
for(var i=0; i<squares.length;i++)
{
    squares[i].style.background=color[i];
    squares[i].addEventListener("click", function(){
        var clickedcolor=this.style.backgroundColor;
        if(clickedcolor===colorpicked)
        {
            h1.style.backgroundColor=colorpicked;
            samecolorall(clickedcolor);
            messagedisplay.textContent="Correct";
            newcolorbutton.textContent="Play Again?";
        }
        else
        {
            this.style.backgroundColor="#232323";
            messagedisplay.textContent="Try Again";
        }
    });
}

function samecolorall(color)
{
   for(var i=0;i<squares.length;i++)
   {
       squares[i].style.background=color;
   }
}

function pickcolor()
{
    var random=Math.floor(Math.random() * color.length);
    return color[random];
}

function generatecolor(num)
{
    var arr=[]
    for(var i=0;i<num;i++)
    {
        arr[i]=randomcolor();
    }
    return arr;
}

function randomcolor()
{
    var r=Math.floor(Math.random()*256);
    var g=Math.floor(Math.random()*256);
    var b=Math.floor(Math.random()*256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
