const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
var fs = require('fs');

var cors = require('cors')

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());
app.use(cors())
// app.use(express.static(__dirname))



app.use(morgan('dev'));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

// app.get('/favicon.ico', (req, res) => res.status(204));
app.get('/', (req,res) =>{
    res.send('server is working')
});
app.post('/sendRequest', (req,res)=>{
    const bodyStr = JSON.stringify(req.body);
   const read =  fs.readFileSync('index.json')
   const write =  fs.appendFileSync('index.json', bodyStr + ",")

    res.send(read);
    // res.redirect('./img/index.html');
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`server is working on port ${PORT}`);
})