document.addEventListener("DOMContentLoaded", function(){

const text = "Computer Science Student | Python Developer | Future Software Engineer";
let i = 0;

function typing(){

if(i < text.length){

document.querySelector(".typing").textContent += text.charAt(i);

i++;

setTimeout(typing,50);

}

}

typing();

});
