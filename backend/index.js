const express = require('express');
const DataBase = require('./utlis/db');
const cors = require('cors');
const env = require('dotenv');
const router = require("./routes/api");
env.config();
const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());


//Database Connection
DataBase().then(r => {
    console.log('DataBase connected successfully');
})
    .catch(error => {
        console.error('Error connecting to MongoDB:', error.message);
    });


//Route Setup
app.use('/api',router)

app.listen(port,()=>{
    console.log('Server Run Port '+port)
});