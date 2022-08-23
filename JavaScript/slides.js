var ImageIndex=1;
//showing first slider by default
ShowSlide(ImageIndex);
//controling dots
function SlideNumber(n){
    ShowSlide(ImageIndex=n);}

//control buttons previous/next
function MoveSlide(n){
    ShowSlide(ImageIndex += n);}

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
