const expressLayouts = require('express-ejs-layouts');

const express = require('express');
const app = express();
const apprenantRouter = require('./routes/apprenant')

const port = 3000;

app.use(expressLayouts);


//template 
app.set('layout', './layouts/main')
app.set('view engine', 'ejs')

/*app.get('/', (req, res) => {
  res.send('Hello World!');
})*/

app.get('/', function(req, res) {
  var locals = {
    title: 'Page Title',
    description: 'Page Description',
    header: 'Page Header'
  };
 res.render('index', locals);
 //res.send('ok');
});

app.use('/apprenant', apprenantRouter);



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


