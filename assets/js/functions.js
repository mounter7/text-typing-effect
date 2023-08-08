const dynamicText = document.querySelector('h1 span')

const words = [
    'Eating',
    'Coding',
    'Sleeping',
    'Freelancing'
]

let wordIndex = 0
let charIndex = 1
let isDeleting = false

const typeEffect = () => {
    const currentWord = words[wordIndex]
    const currentChar = currentWord.substring(0, charIndex)
    dynamicText.textContent = currentChar
    dynamicText.classList.add('stop-blinking')
    
    if (!isDeleting && charIndex < currentWord.length) {
        // If condition true, type the next character
        charIndex++
        setTimeout(typeEffect, 200)
    } else if (isDeleting && charIndex > 0) {
        // If condition true, remove the previous character
        charIndex--
        setTimeout(typeEffect, 100)
    } else {
        // If word is deleted then switch to the next word
        isDeleting = !isDeleting
        dynamicText.classList.remove('stop-blinking')
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex
        setTimeout(typeEffect, 1200)
    }
}

$(document).ready(function() {
    typeEffect()
})