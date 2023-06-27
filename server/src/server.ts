import express from "express";
import { routes } from "./router";
import bodyParser from 'body-parser';

const port: number = 3000;

const app = express();
app.use(bodyParser.json());
app.use(routes)

app.listen(port, () => {
  console.log(`Server is running in port http://localhost:${port}`)
}) 