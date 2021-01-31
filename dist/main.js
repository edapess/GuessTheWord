import {createDOM} from './functions.js'
import {questions} from './questionAnswer.js'
// get root
const ROOT = document.getElementById('root')
//random question array index
let randomIndex = questions[Math.floor(Math.random() * questions.length)]

//random category title
const CATEGORY = createDOM('div',ROOT,'category', `Answer is from "${randomIndex.category}" category`)
//creat question line
const QUESTION = createDOM('p',ROOT,'question',randomIndex.question)
//create input box for dashes
const INPUT_BOX = createDOM('div', ROOT, 'input-box', '')
//container
const CONTAINER = createDOM('div', ROOT, 'container', '') //create
// ALPHABET
let lowLetters = new Array(26).fill(1).map((_, i) => String.fromCharCode(97 + i))
let numbers = new Array(10).fill(1).map((_, i) => String.fromCharCode(48  + i))
let alphabet = lowLetters.concat(numbers)
//letter buttons
alphabet.forEach(letter => {
    let btn = createDOM('button', CONTAINER, 'myBtns', letter)
    btn.innerText = letter
})

// random answer
let answer = randomIndex.correct_answer.toLowerCase()
let answerArr = answer.split('')
//creat inputs by answer.length
for (let i = 0; i < answer.length; i++) {
    answer[i] === ' ' ? createDOM('div', INPUT_BOX, 'input', '-') : createDOM('div', INPUT_BOX, 'input', '_')
}
//inputs array
let inputArr = Array.from(document.querySelectorAll('.input')).map((v) => v)
//get btns add listener
let buttons = document.querySelectorAll('.myBtns')
//on click
for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = () => {
        let gues = buttons[i].innerText
        for (let l = 0; l < answerArr.length; l++) {
            if (answerArr[l] === gues) {
                inputArr[l].innerText = `${gues}`
                buttons[i].disabled = true

            } else {
                console.log('no');
            }
        }
    }
}
//need You have '987654321' lives with auto
