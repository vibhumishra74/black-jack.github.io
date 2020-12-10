/*************** 
card array
***************/
var cards=["02.png","03.png","04.png","05.png","06.png","07.png","08.png","09.png","10.png","01.png","11.png","12.png","13.png"];

/***********************************
 show one card to dealer hand on start of game
 **********************************/
window.addEventListener("load", function(){
   dealer();
  } )
/*************** 
all variable declration;
***************/
var dealercardimg=document.querySelector(".dealercardimg")
var p1c=document.querySelector(".p1cardimg")
var p2c= document.querySelector(".p2cardimg")
var swish= document.getElementById("swish")
var dealerscores=document.querySelector("#dealerscore")
var p1score=document.querySelector("#p1score")
var p2score=document.querySelector("#p2score")
var fin= document.querySelector("#finalresult")
var y=0;
var z=0;
var m=0;
var dealerscore=0;
var ds=0;
var p1s=0;
var p2s=0;
var fins1=0;
var fins2=0;
var fins3=0;
var d=0;
/*************** 
geating audio file..
***************/
var aud1=new Audio("./static/sound/swish.m4a");
var aud2=new Audio("./static/sound/cash.mp3");
var aud3 = new Audio("./static/sound/aww.mp3");

/*************** 
dealer function on click call   
***************/
console.log('dealer function: ',dealer);
 function dealer() {
  // wincheck(p1s,p2s,dealerscore);
  var random1 = Math.floor(Math.random()*13);
  console.log('random: ',random1);
  var img1 = document.createElement('img');
  img1.setAttribute('src','./static/cards/'+cards[random1]);
  img1.setAttribute('id',cards[random1].slice(0,2));
  img1.setAttribute("class","animatedBox");
  console.log('dealerscore: ', dealerscore);
    // dealercardimg.appendChild(img1);
  dealerscore = dealerAddscores(img1);
    return console.log("dealerscore0:",dealerscore)


}
/*************** 
random function on click call
***************/
function random()
{
   var x=Math.floor(Math.random()*13);
   console.log('this is x:-',x);
   var img= document.createElement("img");
   aud1.play();
   img.setAttribute("src","./static/cards/"+cards[x]);
   img.setAttribute("id",cards[x].slice(0,2));
   img.setAttribute("class","animatedBox");
   if(m%2==0){
    wincheck(p1s,p2s,dealerscore);
   p1c.appendChild(img);
   p1s=p1addscore(img)
   return console.log("0")}
   console.log(m)
   if(m%2!=0){
   p2c.appendChild(img);
   p2s=p2addscore(img)
   wincheck(p1s,p2s,dealerscore);
   return console.log("0");
 }
}

/*************** 
Dealer score
***************/
function dealerAddscores(img1) {
  switch (img1.id) {
    case "02":
    ds=ds+2;
    // dealerscores.innerHTML = ds;
      break;
      case "03":
      ds=ds+3;
    // dealerscores.innerHTML = ds;
      break;
      case "04":
      ds=ds+4;
    // dealerscores.innerHTML = ds;
      break;
      case "05":
      ds=ds+5;
    // dealerscores.innerHTML = ds;
      break;
      case "06":
      ds=ds+6;
    // dealerscores.innerHTML = ds;
      break;
      case "07":
      ds=ds+7;
    // dealerscores.innerHTML = ds;
      break;
      case "08":
      ds=ds+8;
    // dealerscores.innerHTML = ds;
      break;
      case "09":
      ds=ds+9;
    // dealerscores.innerHTML = ds;
      break;
      case "10":
      ds=ds+10;
    // dealerscores.innerHTML = ds;
      break;
      case "11":
      ds=ds+10;
    // dealerscores.innerHTML = ds;
      break;
      case "12":
      ds=ds+10;
    // dealerscores.innerHTML = ds;
      break;
      case "13":
      ds=ds+10;
    // dealerscores.innerHTML = ds;
      break;
      case "01" :
      ds=ds+11;
    // dealerscores.innerHTML = ds;
      break;
    default:
      'something went wrong';
      break;
  }
  /*************** 
on every click checking dealer score
***************/
  if(ds===21){
    fin.innerHTML="Dealer Won";
    aud2.play();
    // dealerscores.innerHTML=ds;
    m=m+1
    return ds}
  if(ds>21 && z>21 && y<=21){
    fin.innerHTML="player1 Won";
    aud2.play();
    // dealerscores.innerHTML=ds;
    m=m+1
    return ds}
  if(ds>21 && y>21 && z <=21){
    fin.innerHTML="player2 Won";
    aud2.play();
    // dealerscores.innerHTML=ds;
    m=m+1
    return ds}
    if( ds<=21 ){
    // dealerscores.innerHTML=ds;
    return ds;
  }

}
/*************** 
player1 score
***************/
function p1addscore(img) {    
    switch (img.id) {
      case "02":
      y=y+2;
      p1score.innerHTML = y;
        break;
        case "03":
        y=y+3;
      p1score.innerHTML = y;
        break;
        case "04":
        y=y+4;
      p1score.innerHTML = y;
        break;
        case "05":
        y=y+5;
      p1score.innerHTML = y;
        break;
        case "06":
        y=y+6;
      p1score.innerHTML = y;
        break;
        case "07":
        y=y+7;
      p1score.innerHTML = y;
        break;
        case "08":
        y=y+8;
      p1score.innerHTML = y;
        break;
        case "09":
        y=y+9;
      p1score.innerHTML = y;
        break;
        case "10":
        y=y+10;
      p1score.innerHTML = y;
        break;
        case "11":
        y=y+10;
      p1score.innerHTML = y;
        break;
        case "12":
        y=y+10;
      p1score.innerHTML = y;
        break;
        case "13":
        y=y+10;
      p1score.innerHTML = y;
        break;
        case "01" :
        y=y+11;
      p1score.innerHTML = y;
        break;
      default:
        'something went wrong';
        break;
    }
     /*************** 
on every click checking player score
***************/
    if(y>21 && x>21 && ds<=21){
    fin.innerHTML="dealer Won";
    aud2.play();
    p1score.innerHTML=y;
    m=m+1
    return y}
    if(y>21 && ds>21 && z<=21){
    fin.innerHTML="Player2 Won";
    aud2.play();
    p1score.innerHTML=y;
    m=m+1
    return y}
    
    if(y<=21){
      fin.innerHTML="Player1 Won";
    p1score.innerHTML=y;
    return y;
  }
}
/*************** 
player2 score
***************/
function p2addscore(img) {

  switch (img.id) {
    case "02":
    z=z+2;
    p2score.innerHTML = z;
      break;
      case "03":
      z=z+3;
    p2score.innerHTML = z;
      break;
      case "04":
      z=z+4;
    p2score.innerHTML = z;
      break;
      case "05":
      z=z+5;
    p2score.innerHTML = z;
      break;
      case "06":
      z=z+6;
    p2score.innerHTML = z;
      break;
      case "07":
      z=z+7;
    p2score.innerHTML = z;
      break;
      case "08":
      z=z+8;
    p2score.innerHTML = z;
      break;
      case "09":
      z=z+9;
    p2score.innerHTML = z;
      break;
      case "10":
      z=z+10;
    p2score.innerHTML = z;
      break;
      case "11":
      z=z+10;
    p2score.innerHTML = z;
      break;
      case "12":
      z=z+10;
    p2score.innerHTML = z;
      break;
      case "13":
      z=z+10;
    p2score.innerHTML = z;
      break;
      case "01" :
      z=z+11;
    p2score.innerHTML = z;
      break;
    default:
      'something went wrong';
      break;
  }
   /*************** 
on every click checking player score
***************/
    if(z>21 && y>21 && ds<=21){
    fin.innerHTML="dealer Won";
    p2score.innerHTML=z;
    aud2.play()
    m=m+1;
    return z}
    if(z>21 && y>ds){
    fin.innerHTML="pplayer1 Won";
    p2score.innerHTML=z;
    aud2.play()
    m=m+1;
    return z}
    if(z>21 && ds>y){
    fin.innerHTML="ddealer Won";
    p2score.innerHTML=z;
    aud2.play()
    m=m+1;
    return z}
    if(z>21 && ds>21 && y<=21){
    fin.innerHTML="Player1 Won";
    p2score.innerHTML=z;
    aud2.play()
    m=m+1;
    return z}
    if(z<=21){
      fin.innerHTML="Player2 Won";
    p2score.innerHTML=z;
    return z;
  }
}
 /*************** 
on every click checking winner
***************/
function hold(){
  m+=1;
  if(z&&y >21){
    fin.innerHTML="Dealer Won";
    $('#pdiv').addClass('hide')
    aud2.play()
  }
  if(p1s==p2s&&  p1s!=0 && dealerscore==p1s && p1s!=0){
    fin.innerHTML="Draw";
    aud3.play()
  }
  if(p1s>p2s && p2s!=0 && p1s>dealerscore && dealerscore!=0 && p1s<=21){
    fin.innerHTML="Player1 Won"
    aud2.play()
  }
  if(p2s> p1s && p1s!=0 && p2s>dealerscore && dealerscore!=0 && p2s<=21){
    fin.innerHTML="Playwe2 Won"
    aud2.play()
  }
  if(dealerscore> p1s && p1s!=0 && dealerscore>p2s && p2s!=0 && ds<=21){
    fin.innerHTML="Dealer Won"
    aud2.play()
  }
  return m;
}
 /*************** 
on every click checking checking over all winner
***************/
function wincheck(p1s,p2s,dealerscore){
  if(p1s==21&&p2s==21 && dealerscore == 21){
    aud3.play();
    return fin.innerHTML="Draw"
  }
  if(dealerscore>21 && p2s>21 && p1s<=21){
    aud2.play()
    return fin.innerHTML="Player1 Won"
  }
    if(p1s-21>p2s-21 && p1s-21>dealerscore-21 && p1s<=21){
      aud2.play()
      return fin.innerHTML="Player1 Won"
    }
    if(p1s>21 && p2s>21 && ds<=21){
      aud2.play()
      return fin.innerHTML="Dealer Won"
    }
    if(dealerscore-21>p2s-21 && dealerscore-21>p1s-21 && ds<=21){
      aud2.play()
      return fin.innerHTML="Dealer Won"
    }
    if(dealerscore>21 && p1s>21 && p2s<=21){
      aud2.play()
      return fin.innerHTML="Player2 Won"
    }
      if(p2s-21>p1s-21 && p2s-21>dealerscore-21&& p2s<=21){
        aud2.play()
        return fin.innerHTML="Player2 Won"
      }
}

 /*************** 
on every click resetting all value
***************/
function playagain(){
  $('#pdiv').removeClass('hide'); 
   if(fin.innerHTML=="Dealer Won"){
     fins3=fins3+1;
     document.getElementById("dealer_win").innerText=fins3;
   }
   if(fin.innerHTML=="Player1 Won"){
     fins1=fins1+1;
     document.getElementById("p1w").innerText=fins1;
   }
   if(fin.innerHTML=="Player2 Won"){
     fins2=fins2+1;
     document.getElementById("p2w").innerText = fins2;
   }
   if(fin.innerHTML=="Draw"){
     d=d+1;
     document.getElementById("d1").innerText = d;
     document.getElementById("d2").innerText = d;
     document.getElementById("d").innerText = d;
   }

   var ig=document.querySelectorAll("img")
   for(i=0;i<ig.length;i++)
   {
     ig[i].remove();
   }
  
   p1score.innerHTML=0;
   p2score.innerHTML=0;
   dealerscores.innerHTML=0;
   fin.innerHTML="Let's Play"
   y=0;
   z=0;
   m=0;
   p1s=0;
   p2s=0;
   ds = 0;
   dealerscore=0;
   return ([y,z,m,p1s,p2s,ds,dealerscore, dealer()]);
}

module.exports = dealer()
module.exports = cards
// module.exports = random()