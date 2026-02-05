//lets create 1 array with numbers from 1 to 6 

const numbers = [1, 2, 3, 4, 5, 6]

//lets create 2 shuffle variables 

let shuffle_number1 = Math.floor(Math.random() * numbers.length) 
let shuffle_number2 = Math.floor(Math.random() * numbers.length) 

//lets create 2 variable for the players to use shuffles

let player_1 = numbers[shuffle_number1]
let player_2 = numbers[shuffle_number2]


//lets log

console.log(`player 1 rolled : ${player_1}`);
console.log(`player 2 rolled : ${player_2}`);



//messages for the winner/loser/draw

if(player_1<player_2) {

    console.log('PC wins!');
    
}

else if (player_1>player_2)
{
    console.log('You win!!!');
    
}

else { 

    console.log('Draw!');
    
}
