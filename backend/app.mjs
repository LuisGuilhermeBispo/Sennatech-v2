import express from 'express';
import nodemailer from 'nodemailer';
import Transport from 'nodemailer-sendinblue-transport';

const app = express();
const port = 3000;

const transporter = nodemailer.createTransport(
    new Transport({ apiKey: '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' })
);

const mailOptions = {
    from: 'iagomgarcia9000@gmail.com',
    to: 'iagomonteirog@gmail.com',
    subject: 'TESTE',
    text: 'ISTO É UM TESTE',
    html: '<p>ISTO É UM TESTE</p>'
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log('E-mail enviado: ' + info.response);
    }
});

app.listen(port, () => {
    console.log(`Servidor iniciado na Porta:${port}`);
});

export default app;
