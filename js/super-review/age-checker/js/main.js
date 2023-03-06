//Create a conditonal that checks their age
let age = document.querySelector('p').value
//If under 16, tell them they can not drive
if(age < 16){
    console.log('You cannot drive!')
}
//If under 18, tell them they can't hate from outside the club, because they can't even get in
if(age < 18){
    console.log('You cant hate from outside the club, because you cant even get in')
}
//If under 21, tell them they can not drink
if(age < 21){
    console.log('You cannot drink')
}
//If under 25, tell them they can not rent cars affordably
if(age < 25){
    console.log('You cannot drive!')
}
//If under 30, tell them they can not rent fancy cars affordably
if(age < 30){
    console.log('You cannot rent fancy cars!')
}
//If under over 30, tell them there is nothing left to look forward too
if(age > 30){
    console.log('You got nothing else to look forward to!')
}
//--- Harder
//On click of the h1
//Take the value from the input
//Place the result of the conditional in the paragraph
