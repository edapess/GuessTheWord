import {
    createDOM
} from './creatDOM.js'
import {
    questions
} from './questionAnswer.js'
// get root
const ROOT = document.getElementById('root')
//random question-Object index from array of questions
let randomIndex = questions[Math.floor(Math.random() * questions.length)]
//random category title
const CATEGORY = createDOM('div', ROOT, 'category', `Answer is from "${randomIndex.category}" category`)
//creat question line
const QUESTION = createDOM('p', ROOT, 'question', randomIndex.question)
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
let answer = randomIndex.correct_answer.toLowerCase()
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
            if (livesCount <= 0) {
                disableButtons()
                lives.innerText = 'You Loose'
            } else {
                comments()
            }
        }

    }

})


// for (let i = 0; i < buttons.length; i++) {
//     buttons[i].onclick = () => {
//         let gues = buttons[i].innerText
//         for (let l = 0; l < answerArr.length; l++) {
//             if (answerArr[l] === gues) {
//                 inputArr[l].innerText = `${gues}`
//                 buttons[i].disabled = true
//                 if (!INPUT_BOX.innerText.includes('_')) {
//                     lives.innerText = 'You WIN'
//                 }

//             } else {
//                 buttons[i].disabled = true
//                 if (livesCount = livesCount-answerArr.length) {
//                     livesCount = livesCount-1
//                 }
//                 comments()
//                 if (livesCount == 0) {
//                     lives.innerText = 'You LOOSE'
//                     for (let i = 0; i < buttons.length; i++) {
//                         buttons[i].disabled = true
//                     }
//                 }
//             }

//         } //loop end

//     }

// }