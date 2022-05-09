import bodyParser from 'body-parser';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import AppController from './controller/app.controller';
import path from 'path';

const app = express();
import dotenv from 'dotenv';
dotenv.config();

const port = process.env.PORT;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.use(AppConfigs.APP_ROUTE, AppController);
app.use(process.env.APP_ROUTE, AppController);

// uploaded img path
app.use('/upload',express.static(path.resolve(__dirname, "./upload")));




app.listen(port, async () => {
   console.log(`Express is listening at http://localhost:${port}`);
   try {
    await mongoose.connect(`${process.env.DATABASE_URL}`)
    .then(() => console.log("MongoDB has been connected"))
    .catch((err) => console.log(err));
   } catch (error) {
       console.log(error.message);
   }
});