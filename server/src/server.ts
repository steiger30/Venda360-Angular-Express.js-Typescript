import express from "express";
import { routes } from "./router";
import bodyParser from 'body-parser';
import cors from 'cors';
import path from "path";
import nodemailer, { Transporter } from 'nodemailer';
const port: number = 3000;
const transporter = nodemailer.createTransport({
  service: 'hotmail',
  auth: {
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD,
  }
});
const options: cors.CorsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200
}

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
  res.render('index');
});
app.get('/login', (req, res) => {
  res.render('login');
});
app.get('/desenvolvedor', (req, res) => {
  res.render('desenvolvedor');
});

app.get('/contato', (req, res) => {
  res.render('contato');
});
app.post('/enviar-email', (req, res) => {
  const { nome, email, assunto, mensagem } = req.body;
  console.log(nome, email, assunto, mensagem)
  const mailOptions = {
    from: 'renansteiger@live.com',
    to: 'renansteiger@live.com',
    subject: assunto,
    text: `Nome: ${nome}\nE-mail: ${email}\n\n${mensagem}`
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Erro ao enviar o e-mail.');
    } else {
      console.log('E-mail enviado: ' + info.response);
      res.status(200).send('E-mail enviado com sucesso!');
    }
  });
});

app.use(cors(options))
app.use(routes)

app.listen(port, () => {
  console.log(`Server is running in port http://localhost:${port}`)
}) 