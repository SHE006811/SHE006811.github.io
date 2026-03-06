const text = "Computer Science Student | Future Software Engineer";
let i = 0;

function typing(){

if(i < text.length){

document.querySelector(".typing").textContent += text.charAt(i);

i++;

setTimeout(typing,60);

}

}

typing();
