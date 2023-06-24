import dotenv from 'dotenv';
import express, { Express } from 'express';
import cors from 'cors';
import { usersRouter, newsRouter } from './routes';

dotenv.config();

const app: Express = express();
app.use(express.json());
app.use(cors());
app.use('/api', [usersRouter, newsRouter]);
app.use(express.static('files'));

const port = process.env.PORT || 8001;
app.listen(port, () => {
    console.log(`Server listening on ${port} port`);
});
