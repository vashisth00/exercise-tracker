const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
//mongoose
const mongoose = require('mongoose');

require('dotenv').config();

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const connection = mongoose.connection;

connection.once('open', ()=>{
    console.log(`Mongo working`);
})

const app = express();
const port = process.env.PORT || 4000;

//cors middleware
app.use(cors());

app.use(express.json());

app.listen(port, ()=> {
    console.log(`Started: http://localhost:${port}`);

})