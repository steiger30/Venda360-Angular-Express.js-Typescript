import express from "express";
import { routes } from "./router";
import bodyParser from 'body-parser';
import cors from 'cors';
const port: number = 3000;

const options: cors.CorsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200
}

const app = express();
app.use(bodyParser.json());

app.use(cors(options))
app.use(routes)

app.listen(port, () => {
  console.log(`Server is running in port http://localhost:${port}`)
}) 