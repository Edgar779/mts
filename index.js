const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');

var cors = require('cors')

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());
app.use(cors())



app.use(morgan('dev'));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});


app.get('/', (req,res)=>{
    res.send('ok');
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`server is working on port ${PORT}`);
})