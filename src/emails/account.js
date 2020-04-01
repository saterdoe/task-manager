const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'saterdoe@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'saterdoe@gmail.com',
        subject: 'Goodbye email',
        text: `Thanks for being part of the app, ${name}. Please let me know why we lost you.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}