const express = require('express');
const { projects }  = require('./data.json');
//const { projects } = data;


const app = express();

app.set('view engine', 'pug');
app.use('/static', express.static('public'));

app.get('/', (req, res) => {
  res.render('index', { projects });
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/projects/:id', (req, res) => {
  const { id, project_name, description, technologies, live_link, github_link, image_urls } = projects[req.params.id];
  res.render('project', {id, project_name, description, technologies, live_link, github_link, image_urls});
})

app.listen(3000, () => {
  console.log('The application is running on localhost:3000!');
});
