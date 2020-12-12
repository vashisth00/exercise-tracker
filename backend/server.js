const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


require('dotenv').config();

const app = express();
const port = process.env.PORT || 4000;

//cors middleware
app.use(cors());

app.use(express.json());

app.listen(port, ()=> {
    console.log(`Started: http://localhost:${port}`);

})