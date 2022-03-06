const venom = require('venom-bot');
const cron = require('node-cron');
const nodemailer = require('nodemailer');


let mailTransporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'puspendras20@gmail.com',
        pass: '9012729842'
    }
});

let mailDetails = {
    from: 'puspendras20@gmail.com',
    to: 'puspendra09singh@gmail.com',
    subject: 'Stop keka web clock',
    text: '👋 Hi, Please login keka and stop webclock.'
};

cron.schedule('* 21 * * *', () => {
    mailTransporter.sendMail(mailDetails, function (err, data) {
        if (err) {
            console.log('Error Occurs');
        } else {
            console.log('Email sent successfully', data);
        }
    });
});

// venom
//     .create({
//         session: 'keka-notification', //name of session
//         multidevice: false
//     })
//     .then((client) => {
//         cron.schedule('* 21 * * *', () => {
//             start(client)
//         });
//     })
//     .catch((erro) => {
//         console.log(erro);
//     });

// function start(client) {

//     client
//         .sendText('918958315050@c.us', '👋 Hi, Please login keka and stop webclock.')
//         .then((result) => {
//             console.log('Result: ', result); //return object success
//         })
//         .catch((erro) => {
//             console.error('Error when sending: ', erro); //return object error
//         });
// }