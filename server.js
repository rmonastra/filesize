'use strict';

var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser')


// require and use "multer"...
var multer  = require('multer');
var upload = multer({ dest: 'uploads/' });

var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/public', express.static(process.cwd() + '/public'));

app.post('/api/fileanalyse', upload.single('upfile'), (req, res, next) => {
  
    return res.json(req.file);
})

app.get('/', function (req, res) {
     res.sendFile(process.cwd() + '/views/index.html');
  });

app.get('/hello', function(req, res){
  res.json({greetings: "Hello, API"});
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Node.js listening ...');
});
