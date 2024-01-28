var mathrandom1 = Math.floor(Math.random() * 6) + 1;
var changeImages = "dice"+mathrandom1+".png";

var refresh1 = document.querySelectorAll("img")[0];

refresh1.setAttribute("src",changeImages);


var mathrandom2 = Math.floor(Math.random() * 6 )+1;
var changeImages2 = "dice"+mathrandom2+".png";
var refresh2 = document.querySelectorAll("img")[1].setAttribute("src",changeImages2);

if(mathrandom1>mathrandom2)
{
    document.querySelector("h1").innerHTML = "🚩Player 1 wins!";
}
else if(mathrandom1===mathrandom2)
{
    document.querySelector("h1").innerHTML="HeHe it's a Draw✌"
}
else
{
    document.querySelector("h1").innerHTML="🚩Player 2 wins!";
}

