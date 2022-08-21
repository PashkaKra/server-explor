require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const router = require('./routers');

const PORT = process.env.PORT || 5000;
const DB_HOST = process.env.DB_HOST;

const app = express();

app.use(express.json());
app.use('/api', router);

const serverStart = async () => {
    try{
        await mongoose.connect(DB_HOST);
        app.listen(PORT, () => {console.log(`server started in ${PORT} port`);}); 
    }
    catch(e){
        console.log(e);
    }
}

serverStart();

