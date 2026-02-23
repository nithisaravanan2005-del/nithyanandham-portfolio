const textArray = ["Full Stack Developer", "Java Developer", "Problem Solver"];
let typingElement = document.querySelector(".typing");
let index = 0;
let charIndex = 0;

function filterSelection(category) {
    let cards = document.getElementsByClassName("certificate-card");

    if(category === "all"){
        for(let i = 0; i < cards.length; i++){
            cards[i].style.display = "block";
        }
    } else {
        for(let i = 0; i < cards.length; i++){
            cards[i].style.display = "none";
        }

        let selected = document.getElementsByClassName(category);
        for(let i = 0; i < selected.length; i++){
            selected[i].style.display = "block";
        }
    }
}

function filterSelection(category) {
    let cards = document.getElementsByClassName("certificate-card");
    let buttons = document.querySelectorAll(".filter-buttons button");

    buttons.forEach(btn => btn.classList.remove("active-filter"));

    if(category === "all"){
        for(let i = 0; i < cards.length; i++){
            cards[i].style.display = "block";
        }
    } else {
        for(let i = 0; i < cards.length; i++){
            cards[i].style.display = "none";
        }

        let selected = document.getElementsByClassName(category);
        for(let i = 0; i < selected.length; i++){
            selected[i].style.display = "block";
        }
    }

    event.target.classList.add("active-filter");
}

filterSelection("all");

filterSelection("all");

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
