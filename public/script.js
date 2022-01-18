var userColors = [];
var simonColors = [];
var level = 0;
var going = false;
var levelEnd = true;

var highScore = localStorage.getItem('highScore')||0;

updateHighScore();

function letterToColor(a)
{
  if(a=='R')
  {
    return "red";
  }
  else if(a=='B')
  {
    return "blue";
  }
  else if(a=='G')
  {
    return "green";
  }
  else if(a=='Y')
  {
    return "yellow";
  }
}
function randomColor()
{
  var rand = Math.floor(Math.random()*4);
  if(rand==0)
  {
    return 'R';
  }
  else if(rand==1)
  {
    return 'B';
  }
  else if(rand==2)
  {
    return 'G';
  }
  else if(rand==3)
  {
    return 'Y';
  }
}
function updateHighScore()
{
  if(level>highScore)
  {
    highScore = level;
    localStorage.setItem('highScore', highScore);
  }
  document.getElementById("highScore").innerHTML = "High Score: "+highScore;
}
function startNext()
{
  going = true;
  userColors = [];
  document.getElementById("curList").innerHTML=("Your current input:"+userColors.toString());

  level++;
  document.getElementById("level").innerHTML = "Level: "+ level;
  var nextColor = letterToColor(randomColor());
  simonColors.push(nextColor);
  console.log(simonColors);
  var index = 0;
  var i1 = setInterval(
    function(){
      if(index>=simonColors.length){
        clearInterval(i1);
        going = false;
        return;
      }
      var curColor = simonColors[index];
      document.getElementById("startButton").style.background=curColor;
      document.getElementById("startButton").innerHTML = curColor;
      console.log(curColor);
      var i2 = setInterval(function(){
        document.getElementById("startButton").style.background="white";
        document.getElementById("startButton").innerHTML = "";
        clearInterval(i2);
      }, 500);

      index++;
    }
    , 1000);
  //setTimeout(()=>{document.getElementById("startButton").classList.remove(nextColor)}, 500);

  //document.getElementById("startButton").innerHTML = "";
}

function startButtonClicked(){
  console.log('Start button clicked');
  if(going||levelEnd==false){
    return;
  }
  going = true;
  levelEnd = false;
  userColors = [];
  document.getElementById("curList").innerHTML=("Your current input:"+userColors.toString());
  document.getElementById("startButton").innerHTML = "";
  startNext();
}
function checkAnswer(){
  if(userColors.length>simonColors.length)
  {
    return;
  }
  var correct = true;
  for(var i = 0;i<userColors.length;i++)
  {
    if(letterToColor(userColors[i])!=simonColors[i])
    {
      correct = false;
      break;
    }
  }
  console.log(correct);
  if(!correct)
  {
    levelEnd =true;
    level=0;
    document.getElementById("level").innerHTML = "Level: "+ level;
    simonColors = [];
    document.getElementById("startButton").innerHTML = "Start";
  }
  else if(correct&&userColors.length==simonColors.length)
  {
    updateHighScore();
    startNext();
    //document.getElementById("startButton").innerHTML = "Start";
  }

}


function redButtonClicked(){
  if(going||levelEnd) return;
  console.log('Red button clicked');
  userColors.push('R');
  console.log(userColors);
  document.getElementById("redButton").classList.add("shadow");
  document.getElementById("redButton").classList.remove("red");
  setTimeout(()=>{
  document.getElementById("redButton").classList.remove("shadow");
  document.getElementById("redButton").classList.add("red");
  }, 500);
  document.getElementById("curList").innerHTML=("Your current input:"+userColors.toString());
  checkAnswer();

}
function blueButtonClicked(){
  if(going||levelEnd) return;
  console.log('Blue button clicked');
  userColors.push('B');
  console.log(userColors);
  document.getElementById("blueButton").classList.add("shadow");
  document.getElementById("blueButton").classList.remove("blue");
  setTimeout(()=>{
  document.getElementById("blueButton").classList.remove("shadow");
  document.getElementById("blueButton").classList.add("blue");
  }, 500);
  document.getElementById("curList").innerHTML=("Your current input:"+userColors.toString());
  checkAnswer();
}
function greenButtonClicked(){
  if(going||levelEnd) return;
  console.log('Green button clicked');
  userColors.push('G');
  console.log(userColors);
  document.getElementById("greenButton").classList.add("shadow");
  document.getElementById("greenButton").classList.remove("green");
  setTimeout(()=>{
  document.getElementById("greenButton").classList.remove("shadow");
  document.getElementById("greenButton").classList.add("green");
  }, 500);
  document.getElementById("curList").innerHTML=("Your current input:"+userColors.toString());
  checkAnswer();
}
function yellowButtonClicked(){
  if(going||levelEnd) return;
  console.log('Yellow button clicked');
  userColors.push('Y');
  console.log(userColors);
  document.getElementById("yellowButton").classList.add("shadow");
  document.getElementById("yellowButton").classList.remove("yellow");
  setTimeout(()=>{
  document.getElementById("yellowButton").classList.remove("shadow");
  document.getElementById("yellowButton").classList.add("yellow");
  }, 500);
  document.getElementById("curList").innerHTML=("Your current input:"+userColors.toString());
  checkAnswer();
}


document.getElementById("startButton").addEventListener("click",startButtonClicked);
document.getElementById("redButton").addEventListener("click", redButtonClicked);
document.getElementById("blueButton").addEventListener("click", blueButtonClicked);
document.getElementById("greenButton").addEventListener("click", greenButtonClicked);
document.getElementById("yellowButton").addEventListener("click", yellowButtonClicked);


/**
Art Project
*/

function initializeAnimation() {
  window.requestAnimationFrame(draw);
}

function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');

  ctx.globalCompositeOperation = 'destination-over';
  ctx.clearRect(0, 0, 900, 700); // clear canvas

  // Figure out what pen we wanna draw with
  ctx.fillStyle = 'rgba(0, 153, 255, 1)';
  ctx.strokeStyle = 'rgba(0, 153, 255, 0.4)';

  ctx.save();
  ctx.translate(300, 250);
  drawArt(ctx);
  ctx.restore();
  // Call draw when the website is ready
  window.requestAnimationFrame(draw);
}

function drawArt(ctx) {
  // Draw triangle
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.moveTo(100, -150);
  ctx.lineTo(10, 0);
  ctx.lineTo(200, 0);
  ctx.lineTo(100, -150);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(130, -100);
  ctx.lineTo(300, -220);
  ctx.lineTo(350, -140);
  ctx.lineTo(180, -30);
  ctx.lineTo(130, -100);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(40, -60);
  ctx.lineTo(80, 160);
  ctx.lineTo(-40, 140);
  ctx.lineTo(-40, -60);
  ctx.lineTo(40, -60);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(150, 40);
  ctx.lineTo(230, 20);
  ctx.lineTo(400, 170);
  ctx.lineTo(310, 170);
  ctx.lineTo(150, 40);
  ctx.stroke();


}

initializeAnimation();
