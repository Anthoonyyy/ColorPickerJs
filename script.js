let body = document.querySelector("body");
let backgroundColorPicker = document.querySelector("#backgroundColorPicker");
let textColorPicker = document.querySelector("#textColorPicker");

 let originalBackground = localStorage.getItem("colorBackground");
body.style.backgroundColor  = originalBackground; 
backgroundColorPicker.value = originalBackground;


let originalText = localStorage.getItem("colorText");
body.style.color  = originalText; 
textColorPicker.value = originalText;

function ChangeColorBackground() {
  let newColor = backgroundColorPicker.value;
  body.style.backgroundColor = newColor;
  localStorage.setItem('colorBackground', newColor);

}

function ChangeColorText(){
    let newColor = textColorPicker.value;
    body.style.color = newColor;
    localStorage.setItem('colorText', newColor);
}

backgroundColorPicker.addEventListener("change", ChangeColorBackground);
textColorPicker.addEventListener("change", ChangeColorText);

////////////////////////////////         Scroll Into View             /////////////////////////////////////////////////////////


let titres = document.querySelectorAll(".scroll");

for(let i=0; i < titres.length;i++){
titres[i].addEventListener("click", clickTitres);
}

function clickTitres(){
 this.scrollIntoView({behavior : "smooth"});
}  

///////////////////////////////////////////////// On wheel ////////////////////////////////////////////////////


document.addEventListener("wheel", scrollToNext, {passive: false});
let indexTitres = 0;

function scrollToNext(event){
  event.preventDefault();
  if(event.deltaY > 0 ){
    indexTitres++;    
  }
  else{
    indexTitres--;
    if (indexTitres < 0) {
      indexTitres++;
    }
  }
  titres[indexTitres].scrollIntoView({behavior : "smooth"});
}