
var ImageIndex=1;
var TextIndex=1;

//showing first slider by default
ShowText(TextIndex);
ShowSlide(ImageIndex);
//controling dots
function SlideNumber(n){
    ShowSlide(ImageIndex=n);
    ShowText(TextIndex=n);}

//control buttons previous/next
function MoveSlide(n){
    ShowSlide(ImageIndex += n);ShowText(TextIndex+=n)}

function ShowSlide(n){
    var i;
    var SlideImage=document.getElementsByClassName("slide-image");
    var SlideText=document.getElementsByClassName("slide-text");
    if(n>(SlideImage.length)||n>(SlideText.length) ){ImageIndex=1}
    if(n<1){ImageIndex=SlideImage.length;}
    for (i = 0; i < SlideImage.length; i++) {
        SlideImage[i].style.display = "none";
    }
    SlideImage[ImageIndex-1].style.display="block";
}
/////////////////////////

function ShowText(n){
    var i;
    var TextSlide=document.getElementsByClassName("slide-text");
    if(n>TextSlide.length){TextIndex=1;}
    if(n<1){TextIndex=TextSlide.length}
    for (i = 0; i < TextSlide.length; i++) {
        TextSlide[i].style.display = "none";
    }
    TextSlide[TextIndex-1].style.display="block";
}
/////////////////
//Start latest events
const EventDate= new Date("Jan 05,2023 00:00:00").getTime();

//Star function
var countdown=setInterval(function(){
    var now=new Date().getTime();
    var event=EventDate-now;
    var days=Math.floor((event / (1000 * 60 * 60 * 24)));
    var hours=Math.floor((event % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes=Math.floor((event % (1000 * 60 * 60)) / (1000 * 60));
    var seconds=Math.floor((event % (1000 * 60)) / 1000);

    document.getElementsByClassName("days")[0].innerHTML=days;
    document.getElementsByClassName("hours")[0].innerHTML=hours;
    document.getElementsByClassName("minutes")[0].innerHTML=minutes;
    document.getElementsByClassName("seconds")[0].innerHTML=seconds;

},1000);
//End latest events

