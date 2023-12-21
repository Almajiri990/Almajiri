const dynamicText = document.querySelector("h1 span");
const word = ["Love", "like Art", "the Future",
"Everything", "Fun", "Our Joy"];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const tyEffect = () => {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    dynamicText.textContent = currentChar;
    dynamicText.classList.add("stopblinking");

    if (!isDeleting && charIndex < currentWord.length) {
        charIndex++;
        setTimeout(typeEffect, 200);
    }else if (isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(typeEffect, 100);
    }else{
        isDeleting = !isDeleting;
        dynamicText.classList.remove("stopbliking");
        wordIndex = !isDeleting ? (wordIndex + 1)%
        word.length : wordIndex;
        setTimeout(tyEffect, 1200);
    }
}

tyEffect();