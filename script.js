//calc ur age in days
function ageInDays(){
    let birthYear = prompt("What year were you born?")
    let days = (2019 - birthYear) * 365; //calculation
    let h2 = document.createElement('h2')
    let textAnswer = document.createTextNode('You are ' +days+' days old')
    h2.setAttribute('id','ageinDayss') //set id of h2 'ageinDayss'
    h2.appendChild(textAnswer)
    document.getElementById('flex-box-result').appendChild(h2)
}

function reset() {
    document.getElementById('ageinDayss').remove();
}

function populate() {
    let image = document.createElement('img')
    let div = document.getElementById('flex-child')
    image.src = "./static/images/child.gif"
    image.setAttribute('id','removeImage') //set id of image  and use it in the function  
    div.appendChild(image)
    //document.getElementById('flex-child').appendChild(image)  
}


//kind of reset those happy populate faces && it removes entire populations
// let removeChild = document.querySelector('#remove')
// let removeFlexFinal = document.querySelector('#flex-child')
// removeChild.addEventListener("click", function(e){
//     removeFlexFinal.style.display = 'none';
// })

//Now also can be done by function for reset
function resetChild() {
    document.getElementById('removeImage').remove();
}

//trying scissor paper rock game
 function sprGame(yourChoice) { //access object 
    //console.log(yourChoice.id)
    let humanChoice, botChoice
    humanChoice = yourChoice.id
    botChoice = numberChoice(randomSpr())
    // console.log('Computer Choice:',botChoice)
    results = decideWinner(humanChoice,botChoice)
    // console.log(results)
    message = finalMessage(results) //you won 
    // console.log(message)
    sprFront(humanChoice, botChoice, message)
 }

 
function randomSpr(){
    return Math.floor(Math.random()*3)
}

function numberChoice(number){
    return ['scissor','paper','rock'][number]
}

function decideWinner(yourChoice, computerChoice){
    let sprdatabase = {

    'scissor' : {'scissor':0.5,'paper':1,'rock':0},
    'paper' : {'scissor':0,'paper':0.5,'rock':1},
    'rock' : {'scissor':1,'paper':0,'rock':0.5}
    }
    let yourScore = sprdatabase[yourChoice][computerChoice]
    // console.log(yourScore)
    let computerScore = sprdatabase[computerChoice][yourChoice]
    return [yourScore,computerScore]
}

function finalMessage([yourScore, computerScore]) {
    if (yourScore === 0) {
        return {message : 'You lost!', color:'red'};
    }else if(yourScore === 0.5){
        return {message: 'Tied!', color:'yellow'};
    } else {
        return {message:'You won!',color:'green'};
    }
}

function sprFront(humanChoice, botChoice, finalMessage){
    let imagesDatabase = {
        'scissor': document.getElementById('scissor').src,
        'paper': document.getElementById('paper').src,
        'rock': document.getElementById('rock').src
    }
    //remove all the image
    document.getElementById('scissor').remove()
    document.getElementById('paper').remove()
    document.getElementById('rock').remove()

    let humanDiv = document.createElement('div')
    let botDiv = document.createElement('div')
    let messageDiv = document.createElement('div')

    humanDiv.innerHTML = "<img src ='" + imagesDatabase[humanChoice]+"'style = 'box-shadow: 0px 10px 50px rgba(63, 147, 216, 0.7)'>"
    messageDiv.innerHTML = "<h2 style='color: "+ finalMessage['color'] + ";font-size:50px; padding:30px; '>" + finalMessage['message'] + "</h2>"
    botDiv.innerHTML = "<img src ='" + imagesDatabase[botChoice]+"'style = 'box-shadow: 0px 10px 50px rgba(220, 47, 26, 0.7)'>"

    document.getElementById('flex-box-spr-div').appendChild(humanDiv);
    document.getElementById('flex-box-spr-div').appendChild(messageDiv);
    document.getElementById('flex-box-spr-div').appendChild(botDiv);
}


//Random Color Pick
let allButtons = document.getElementsByTagName('button')
// console.log(allButtons)

let copyAllButtons = [];
for(let i =0; i< allButtons.length; i++) {
    copyAllButtons.push(allButtons[i].classList[1])
}
// console.log(copyAllButtons)

function buttonColorChange(buttonThis) {
    // console.log(buttonThis.value)
    if(buttonThis.value == 'red'){
    buttonRed();
    }else if(buttonThis.value == 'green'){
        buttonGreen()
    }else if (buttonThis.value == 'reset'){
        buttonReset()
    }else if(buttonThis.value == 'random'){
        buttonRandom()
    }
}

function buttonRed(){
    for(let i =0; i < allButtons.length; i++){
        allButtons[i].classList.remove(allButtons[i].classList[1]) //remove the 2nd class of ith button
        allButtons[i].classList.add('btn-danger')
    }
}

function buttonGreen(){
    for(let i =0; i < allButtons.length; i++){
        allButtons[i].classList.remove(allButtons[i].classList[1]) //remove the 2nd class of ith button
        allButtons[i].classList.add('btn-success')
    }
}

function buttonReset(){
    for(let i =0; i < allButtons.length; i++){
        allButtons[i].classList.remove(allButtons[i].classList[1])
        allButtons[i].classList.add(copyAllButtons[i])
    }
}

function buttonRandom() {
    let choices = ['btn-primary','btn-success','btn-warning','btn-danger']
    for(i=0; i < allButtons.length;i++){
        let randomNum = Math.floor(Math.random()*4)
        allButtons[i].classList.remove(allButtons[i].classList[1])
        allButtons[i].classList.add(choices[randomNum])
    }
}