//let's make an arrey to put email invitation on

let partyGuestList = ['michelino@party.it', 'jeffbezoz@rich.it', 'donaldotrampo@ice.it', 'lamiamail@entro.it'];
//let use a prompt to let user insert the mail

const myMail = prompt('Hi there, please put your email here to see if you can join party...');
//let's create a variable to see if is true or false that we are invited and put them on false by default

let imInvited = false


//start a for cycle to move inside the array
for (let i = 0; i < partyGuestList.length; i++) {
    //if we are invited, imInvited become true
    if (myMail===partyGuestList[i]) {

        imInvited = true
    }

}


//let's put a message for the user
if (imInvited) {
    console.log('We can party hard togheter! You are invited.');
    
}
    else {
        console.log('We are so sorry, you are not invited. Maybe next time!');
        
    }