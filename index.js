NumberseqComputer=[];
NumberseqUser=[];

var greena=new Audio("sounds\\green.mp3");
var reda=new Audio("sounds\\red.mp3");
var yellowa=new Audio("sounds\\yellow.mp3");
var bluea=new Audio("sounds\\blue.mp3");
var wronga=new Audio("sounds\\wrong.mp3");

function audioBlinkPlayer(n){
    switch(n){
        case 1:

            greena.play();
            $(".greenbox").fadeOut(45).fadeIn(45);
            
            break;
        case 2:
            reda.play();
            $(".redbox").fadeOut(45).fadeIn(45);
            
            break;
        case 3:
            yellowa.play();
            $(".yellowbox").fadeOut(45).fadeIn(45);
            
            break;
        case 4:
            bluea.play();
            $(".bluebox").fadeOut(45).fadeIn(45);
            break;
        default:
            console.log("Issue")
    }

}







$(document).on("keydown",function(){
    $("body").removeClass("gameover");
    if (NumberseqComputer.length===0){
    rnumber=Math.round(Math.random()*3)+1;
    NumberseqComputer.push(rnumber);
    audioBlinkPlayer(rnumber);
    $("h1").text("Level 1");}
    
});

$("span").on("click",function(){
    $("body").removeClass("gameover");
    if (NumberseqComputer.length===0){
    rnumber=Math.round(Math.random()*3)+1;
    NumberseqComputer.push(rnumber);
    audioBlinkPlayer(rnumber);
    $("h1").text("Level 1");}
});

$(".greenbox").on("click",function(){
    audioBlinkPlayer(1);
    if (NumberseqComputer.length!=0){
    NumberseqUser.push(1);
    validator()}
})

$(".redbox").on("click",function(){
    audioBlinkPlayer(2);
    if (NumberseqComputer.length!=0){
        NumberseqUser.push(2);
        validator()}
    
})

$(".yellowbox").on("click",function(){
    audioBlinkPlayer(3);
    if (NumberseqComputer.length!=0){
        NumberseqUser.push(3);
        validator()}
})

$(".bluebox").on("click",function(){
    audioBlinkPlayer(4);
    if (NumberseqComputer.length!=0){
        NumberseqUser.push(4);
        validator()}
})


function validator(){
for(i=0;i<NumberseqUser.length;i++)
if (NumberseqComputer[i]===NumberseqUser[i] && NumberseqComputer.length===NumberseqUser.length){
    NumberseqUser=[]
    rnumber=Math.round(Math.random()*3)+1;
    NumberseqComputer.push(rnumber);
    $("h1").text("Level "+NumberseqComputer.length);
    setTimeout(function(){ audioBlinkPlayer(rnumber); }, 700);
    
    
}
else if (NumberseqComputer[i]===NumberseqUser[i]){

}else{
    wronga.play()
    NumberseqComputer=[]
    NumberseqUser=[]
    $("body").addClass("gameover")
    $("h1").html("Game Over. Press Any key Play Again or Click on 🎪")
    
    
    
    
}
}