const venom = require('venom-bot');
const cron = require('node-cron');

venom
    .create({
        session: 'keka-notification', //name of session
        multidevice: false
    })
    .then((client) => {
        cron.schedule('* 21 * * *', () => {
            start(client)
        });
    })
    .catch((erro) => {
        console.log(erro);
    });

function start(client) {

    client
        .sendText('918958315050@c.us', '👋 Hi, Please login keka and stop webclock.')
        .then((result) => {
            console.log('Result: ', result); //return object success
        })
        .catch((erro) => {
            console.error('Error when sending: ', erro); //return object error
        });
}