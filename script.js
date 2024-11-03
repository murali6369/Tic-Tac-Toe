let currentplayer='o';
let checkgame="working";
let c=[true,true,true,true,true,true,true,true,true];


function myfun(num)
{
    if(checkgame=="working"&& c[num]==true)
        {
            if(currentplayer=="x")
            {
                document.getElementById('box'+num).innerHTML='o';
                currentplayer='o';
                c[num]=false;
            }
            else
            {
                document.getElementById('box'+num).innerHTML='x';
                currentplayer='x';
                c[num]=false;
            }
            checkwin();
        }
}

function reset()
{
    window.location="index.html";
}

function checkwin()
{
    let a=document.getElementById('box0').innerHTML;
    let b=document.getElementById('box1').innerHTML;
    let c=document.getElementById('box2').innerHTML;
    let d=document.getElementById('box3').innerHTML;
    let e=document.getElementById('box4').innerHTML;
    let f=document.getElementById('box5').innerHTML;
    let g=document.getElementById('box6').innerHTML;
    let h=document.getElementById('box7').innerHTML;
    let i=document.getElementById('box8').innerHTML;



    if(currentplayer==a&&currentplayer==b&&currentplayer==c)
    {
        document.getElementById('result').innerHTML=currentplayer+" "+"wins";
        checkgame="notworking";
    }
    else if(currentplayer==d&&currentplayer==e&&currentplayer==f)
    {
        document.getElementById('result').innerHTML=currentplayer+" "+ "wins";
        checkgame="notworking";
    }
    else if(currentplayer==g&&currentplayer==h&&currentplayer==i)
    {
        document.getElementById('result').innerHTML=currentplayer+" "+ "wins";
        checkgame="notworking";
    }
    else if(currentplayer==a&&currentplayer==d&&currentplayer==g)
    {
        document.getElementById('result').innerHTML=currentplayer+" "+ "wins";
        checkgame="notworking";
    }
    else if(currentplayer==b&&currentplayer==e&&currentplayer==h)
    {
        document.getElementById('result').innerHTML=currentplayer+" "+ "wins";
        checkgame="notworking";
    }
    else if(currentplayer==c&&currentplayer==f&&currentplayer==i)
    {
        document.getElementById('result').innerHTML=currentplayer+" "+ "wins";
        checkgame="notworking";
    }
    else if(currentplayer==a&&currentplayer==e&&currentplayer==i)
    {
        document.getElementById('result').innerHTML=currentplayer+ "wins";
        checkgame="notworking";
    }
    else if(currentplayer==c&&currentplayer==e&&currentplayer==g)
    {
        document.getElementById('result').innerHTML=currentplayer+" "+ "wins";
        checkgame="notworking";
    }
    else
    {
        if (a && b && c && d && e && f && g && h && i) {
            document.getElementById('result').innerHTML = "Draw!";
            checkgame = "notworking";
        }
    }


}