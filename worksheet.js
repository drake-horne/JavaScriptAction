// let dayOfWeek = 'Monday';
// console.log(dayOfWeek);

// dayOfWeek = 'Friday';
// console.log("I can't wait for " + dayOfWeek);


// let animalInput = prompt('What is your favorite animal?');
// let colorInput = prompt('What is your favorite color?');
// console.log("I've never seen a " + colorInput + animalInput);

// // bagel
// // mac&cheese
// // steak
// let timeOfDay = 1900;
// let favMeal = '';
// if(timeOfDay < 1200) {
//     favMeal = 'Bagels' ;   
// }
// else if(timeOfDay > 1200 && timeOfDay < 1700) {
//     favMeal = 'mac&cheese';
// }
// else {
//     favMeal = 'steak';
// }


// let ranumber = Math.floor(Math.random() * 11);
// if(ranumber < 3) {
//     console.log('Beatles');
// }
// else if(ranumber<6 && ranumber>2) {
//     console.log('Stones');
// }
// else if(ranumber<9 && ranumber>5) {
//     console.log('Floyd');
// }
// else {
//     console.log('Hendrix');
// }




// for(let i = 0; i<7; i++) {
//     console.log('JavaScript is cool!')
// }

// for(let i=0; i<11; i++) {
//     console.log(i)

// }

// for(let i=0;i<10;i++) {
//     if(i%2 == 0 || i == 0){
//         console.log('Hello')
//     }
//     else{
//         console.log('Goodbye')
//     }
// }
// function printMovieName(){
//     let favMovie = 'Interstellar';
//     console.log(favMovie);
// }
// printMovieName();

// function findFavBand() {
//     let response = prompt('What is your favorite band?');
//     return response
// }
// favBand = findFavBand()
// console.log(favBand)


// function concertDisplay(musicalAct){
//     let myStreet = prompt('Please enter the name of the street you live on.');
//     console.log('It would be great if ' + musicalAct +' played a show on ' + myStreet);

// }
// concertDisplay(favBand);

// let desktopItems = ['moniter', 'clock', 'desk'];
// //moniter has index value of 0
// //clock has index value of 1
// //desk has an index value of 2
// console.log(desktopItems[1])
// desktopItems.push('Infinity Gauntlet')
// for(i=0;i<desktopItems.length;i++){
//     console.log(desktopItems[i]) 
// }



let magicNumber = Math.floor(Math.random() * 101);
let guess = parseInt(0)
while(guess != magicNumber) {
    guess =  prompt('Guess the magic number')
    if(guess == 'break'){
        break
    }
    if(guess < magicNumber){
        console.log('Too low ...')
        if(guess > magicNumber-10){
            console.log('But Getting Warmer!')
        }
    }
    else if(guess > magicNumber){
        console.log('Too high ...')
        if(guess < magicNumber+10){
            console.log('But Getting Warmer!')
        }
    }
    else{
        console.log(magicNumber + ' is the magic number!')    
    }
}