//import variable
const message = require('./message.json')

//get fortune function
function getFourtune() {
    const randomIndex = Math.floor(Math.random() * message.length)
    return message[randomIndex]
}

//export
module.exports = {
    getFourtune
};

