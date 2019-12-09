// Code your solutions in this file
function writeCards(names, gift) {
    let messages = [];
    for (let i = 0; i < names.length; i++) {
        messages.push(`Thank you, ${names[i]}, for the wonderful ${gift} gift!`);
    }
    return messages;
}

function countDown(num) {
    while (num >= 0) {
        console.log(num--)
    }
}