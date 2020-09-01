
var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res)=>{
  res.render('home');

});

app.get('/about', (req, res)=>{
  res.render('about');
});

const projectlist = [

{
logo: 'https://i.ytimg.com/vi/-dSeD-hLNZQ/hqdefault.jpg',
company: 'Mini Project',
description: 'Chat Application',
tech: 'Android Application',
category: 'Android'
},
{
logo: 'https://www.ebuyer.com/blog/wp-content/uploads/2014/07/buttons-on-a-calculator-header1.jpg',
company: 'Mini Project',
description: 'Calculator',
tech: 'Website',
category: 'Fullstack'
},
{
logo: 'https://i.pinimg.com/originals/a7/1a/fc/a71afc4425785506e03078b742c6b64e.png',
company: 'Mini Project',
description: 'BMI-Calculator',
tech: 'Android Application',
category: 'Android'
},
{
logo: 'https://i.ytimg.com/vi/-dSeD-hLNZQ/hqdefault.jpg',
company: 'Mini Project',
description: 'Chat Application',
tech: 'Android Application',
category: 'Android'
}

]

app.get('/projek', (req, res)=>{
  res.render('projek', { projek: projectlist })

});

app.get('/about', (req, res)=>{
  res.render('about');
});


app.listen(8080);
console.log('8080 is the magic port');
