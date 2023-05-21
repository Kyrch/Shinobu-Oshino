module.exports = {
    createEvent(message) {
        const { channel } = message;

        if (channel.id == '935689126974476298' || channel.id == '852931131824930816' || channel.id == '929183441998708798') {
            message.crosspost();
        }
    }
}