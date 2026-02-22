const textArray = ["Full Stack Developer", "Java Developer", "Problem Solver"];
let typingElement = document.querySelector(".typing");
let index = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[index].length) {
        typingElement.textContent += textArray[index].charAt(charIndex);
        charIndex++;
        setTimeout(type, 100);
    } else {
        setTimeout(erase, 1000);
    }
}

function erase() {
    if (charIndex > 0) {
        typingElement.textContent = textArray[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 50);
    } else {
        index = (index + 1) % textArray.length;
        setTimeout(type, 200);
    }
}

document.addEventListener("DOMContentLoaded", function(){
    type();
});