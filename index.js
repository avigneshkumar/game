imgarr=["dice1.png",
"dice2.png",
"dice3.png",
"dice4.png",
"dice5.png",
"dice6.png"]
function images(){
var n1=Math.random();
n1=n1*6;
n1=Math.floor(n1);
select1=imgarr[n1];
var n2=Math.random();
n2=n2*6;
n2=Math.floor(n2);
select2=imgarr[n2];
document.getElementsByClassName("img1")[0].src = 'images/' + select1;
document.getElementsByClassName("img2")[0].src = 'images/' + select2;
if(n1>n2){
    document.querySelector("h1").innerHTML="Player 1 wins"
}
else if(n2>n1){
    document.querySelector("h1").innerHTML="Player 2 wins"
}
else if(n1==n2){
    document.querySelector("h1").innerHTML="Draw"
}
}
document.querySelector("button").addEventListener("click",images);
