//calc ur age in days
function ageInDays(){
    let birthYear = prompt("What year were you born?")
    let days = (2019 - birthYear) * 365;
    let h2 = document.createElement('h2')
    let textAnswer = document.createTextNode('You are ' +days+' days old')
    h2.setAttribute('id','ageinDayss')
    h2.appendChild(textAnswer)
    document.getElementById('flex-box-result').appendChild(h2)
}

function reset() {
    document.getElementById('ageinDayss').remove();
}