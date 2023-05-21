const getEmojiCode = (emoji) => {
    return String.fromCodePoint("0x" + emoji.codePointAt(0).toString(16));
}

const sleep = async msec => {
    return new Promise(resolve => setTimeout(resolve, msec));
}

const shuffleArray = (inputArray) => {
    return inputArray.sort(() => Math.random() - 0.5);
}

const shuffleString = () => {
    var letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    return letters.split('').sort(() => Math.random() - 0.5).join('').substring(0, 6);
}

module.exports = {
    getEmojiCode,
    sleep,
    shuffleArray,
    shuffleString
}