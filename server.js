
var express = require('express');
var app = express();

const session = require('express-session');

app.use(session({
  secret: 'secret',
  saveUninitialized: true,
  resave: true
}));

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res)=>{
  res.render('home', {
    session: req.session,
  });

});

app.get('/about', (req, res)=>{
  res.render('about',{
    session: req.session,
  });
});

const projectlist = [

{
logo: 'https://i.pinimg.com/originals/a7/1a/fc/a71afc4425785506e03078b742c6b64e.png',
company: 'Mini Project',
description: 'BMI-Calculator',
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
logo: 'https://i.ytimg.com/vi/-dSeD-hLNZQ/hqdefault.jpg',
company: 'Mini Project',
description: 'Chat Application',
tech: 'Android Application',
category: 'Android'
},

{
logo: 'https://www.element61.be/sites/default/files/Power%20BI.png',
company: 'Mini Project',
description: 'Ramen Analysis',
tech: 'Power BI',
category: 'Business Intelligent'
},

{
logo: 'https://dwglogo.com/wp-content/uploads/2016/07/1300px_Tableau_Software_logo.png',
company: 'Mini Project',
description: 'Dognition Analysis',
tech: 'Tableau',
category: 'Business Intelligent'
},

{
logo: 'https://www.element61.be/sites/default/files/Power%20BI.png',
company: 'Mini Project',
description: 'Sales Analysis',
tech: 'Power BI',
category: 'Business Intelligent'
},

{
logo: 'https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/0016/7313/brand.gif?itok=i8PdGZBi',
company: 'UPM',
description: 'Fake Header Tool',
tech: 'Python/Orange3',
category: 'Data Modelling'
},

{
logo: 'https://media-exp1.licdn.com/dms/image/C560BAQGLUsyrTDV40w/company-logo_200_200/0?e=2159024400&v=beta&t=8vUBBI9-KLgks5lFLPLUIqSL9p9ESojvCjtAQiFehKA',
company: 'Optima Infosystems',
description: 'MyKAD IJPN',
tech: 'TOAD/VMWare',
category: 'Database'
},

{
logo: 'https://www.kunocreative.com/hubfs/Chatbot-evolution-1.png',
company: 'Mini Project',
description: 'ChatBot',
tech: 'Google Colab',
category: 'Artificial Intelligent'
},

]

app.get('/projek', (req, res)=>{
  console.log(req.session);
  res.render('projek', {
    session: req.session,
    projek: projectlist })

});

app.get('/about', (req, res)=>{
  res.render('about');
});

//admin
app.get('/admin/login', (req, res)=>{
  res.render('admin/login');
});

//temporary
app.get('/admin/user/logged-in', (req, res)=>{
   req.session.isLoggedIn =true
   res.redirect('/')
});

//logout
app.get('/admin/user/logged-out', (req, res)=>{
  console.log(req)
   req.session.isLoggedIn =false
   res.redirect('/')
});

app.listen(8080);
console.log('8080 is the magic port');
