
var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.get('/home', (req, res)=>{
  res.render('home');

});

app.get('/about', (req, res)=>{
  res.render('about');
});

app.get('/project', (req, res)=>{
  res.render('project');
});

app.get('/about', (req, res)=>{
  res.render('about');
});


app.listen(8080);
console.log('8080 is the magic port');
