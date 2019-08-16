const express = require('express');
const { projects }  = require('./data.json');
//const { projects } = data;


const app = express();

app.set('view engine', 'pug');
app.use('/static', express.static('public'));

app.get('/', (req, res) => {
  const {description} = projects[0];
  console.log(description);
  res.render('index', {description: description});
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/:id', (req, res) => {
  res.render('index');
})

app.listen(3000, () => {
  console.log('The application is running on localhost:3000!');
});