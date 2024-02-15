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



let titres = document.querySelectorAll(".scroll");

for(let i=0; i < titres.length;i++){
titres[i].addEventListener("click", clickTitres);
}

function clickTitres(){
 this.scrollIntoView({behavior : "smooth"});
}