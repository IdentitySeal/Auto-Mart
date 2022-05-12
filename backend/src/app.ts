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

app.use(cors())

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(process.env.APP_ROUTE, AppController);

// uploaded img path
app.use('/upload',express.static(path.resolve(__dirname, "./upload")));

app.use(express.static(path.join(__dirname, '../../frontend/build')));

app.get('/advert', (req, res) => {
  res.sendFile(path.join(__dirname, '../../frontend/build', 'index.html'));
});




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