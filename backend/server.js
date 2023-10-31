const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const workoutRouter = require('./routes/workouts');
const userRouter = require('./routes/user');

require('dotenv').config();

const app = express();
const morgan = require('morgan');

app.use(cors({
    origin: ["https://workoutbroapi.onrender.com"],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));

const DB_URI = process.env.MONGODB_URI;
mongoose.connect(DB_URI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        // Listening for requests
        app.listen(process.env.PORT, () => {
            console.log('MongoDB cluster connected & Server listening on port', process.env.PORT);
        });
    })
    .catch(err => console.log(err));

app.use(express.json());
app.use(morgan("dev"));

// Routes
app.use('/api/workouts', workoutRouter);
app.use('/api/user', userRouter);


