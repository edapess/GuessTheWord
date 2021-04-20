import {
    createDOM
} from './creatDOM.js'
import {
    questions
} from './questionAnswer.js'

import {
    man,
    ufo,
    light
} from './spaceman.js'
// get root
const ROOT = document.getElementById('root')
//random question-Object index from array of questions
let random = questions[Math.floor(Math.random() * questions.length)]
//random category title
const CATEGORY = createDOM('div', ROOT, 'category', `Answer is from "${random.category}" category`)
//spaceman drawing
let SPACEMAN = createDOM('div', ROOT, 'spaceman', '')
//creat question line
const QUESTION = createDOM('p', ROOT, 'question', random.question)
//create input box for dashes
const INPUT_BOX = createDOM('div', ROOT, 'input-box', '')
//container
const CONTAINER = createDOM('div', ROOT, 'container', '') //create
// ALPHABET
let lowLetters = new Array(26).fill(1).map((_, i) => String.fromCharCode(97 + i))
let numbers = new Array(10).fill(1).map((_, i) => String.fromCharCode(48 + i))
let alphabet = lowLetters.concat(numbers)
//letter buttons
alphabet.forEach(letter => {
    createDOM('button', CONTAINER, 'myBtns', letter)
})
// random answer
let answer = random.correct_answer.toLowerCase()
let answerArr = answer.split('')
//creat inputs by answer.length
for (let i = 0; i < answer.length; i++) {
    answer[i] === ' ' ? createDOM('div', INPUT_BOX, 'input', '-') : answerArr[i] === ',' ? createDOM('div', INPUT_BOX, 'input', '') : createDOM('div', INPUT_BOX, 'input', '_')
}
//inputs array
let inputArr = Array.from(document.querySelectorAll('.input')).map((v) => v)
//get btns add listener
let buttons = document.querySelectorAll('.myBtns')
let livesCount = 10
let lives = createDOM('p', ROOT, 'lives', ``)
lives.innerText = `You have ${livesCount} lives`
//need You have '987654321' lives with auto
let comments = () => {
    lives.innerText = `You have ${livesCount} lives`
}
let disableButtons = () => {
    for (let b = 0; b < buttons.length; b++) {
        buttons[b].disabled = true
    }
}
let spacemanDrawing = () => {
   
}
//on click
buttons.forEach(btn => {
    btn.onclick = () => {
        let gues = btn.innerText
        if (answerArr.includes(gues)) {
            for (let i = 0; i < answerArr.length; i++) {
                if (answerArr[i] === gues) {
                    inputArr[i].innerText = `${gues}`
                    btn.disabled = true
                }
            }
            //loop ends
            if (!INPUT_BOX.innerText.includes('_')) {
                lives.innerText = 'You WIN'
                disableButtons()
            }
        } else {
            btn.disabled = true
            livesCount--
            spacemanDrawing()
            if (livesCount <= 0) {
                disableButtons()
                lives.innerText = 'You Loose'
            } else {
                comments()
            }
        }
    }
})