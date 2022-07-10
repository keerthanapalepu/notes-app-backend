import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import notesRoutes from './routes/notes.js';

const app = express();

app.use(cors());

const port = process.env.PORT || 8080;
const CONNECTION_URL = "mongodb+srv://keerthana:keerthana@cluster0.6e3dm.mongodb.net/?retryWrites=true&w=majority"
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/notes', notesRoutes);

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(port, () => console.log(`Server Running on port: http://localhost:${port}`)))
    .catch((error) => console.log(`${error} did not connect`));