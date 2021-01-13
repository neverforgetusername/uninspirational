
/*
A Codeacademy project - message generator program. This code should 
randomly generate uninspirational messages. 
*/

// Paikka josta hakea dataa haetaan viestiä varten. Helposti ymmärrettävä tapa.

const firstPartOfMessage = ["Probably  ", "Nevertheless ", "Sometimes "];
const secondPartOfMessage = ["quitting ", "cheating ", "sleeping "];
const thirdPartOfMessage = ["is the best answer", "should be considered", "won't hurt you"];


//  Funktio, joka palauttaa viestin
function generateMessage() {
    let message = [];
    message.push(firstPartOfMessage[Math.floor(Math.random() * firstPartOfMessage.length)]);
    message.push(secondPartOfMessage[Math.floor(Math.random() * secondPartOfMessage.length)]);
    message.push(thirdPartOfMessage[Math.floor(Math.random() * thirdPartOfMessage.length)]);
    return message;
}


console.log(generateMessage());