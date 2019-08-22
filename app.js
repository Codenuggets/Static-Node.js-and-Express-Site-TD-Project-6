const express = require('express');
const { projects }  = require('./data.json');

const app = express();

app.set('view engine', 'pug');
app.use('/static', express.static('public'));

// Renders index view
app.get('/', (req, res) => {
  res.render('index', { projects });
});

// Renders about view
app.get('/about', (req, res) => {
  res.render('about');
});

// Renders a project view based on which id is passed
app.get('/projects/:id', (req, res, next) => {
  // Handles error page if user types a project number that isn't in the projects dataset
  if(projects[req.params.id] === undefined) {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
  } else{
    // Assigns the properties from the project requested from the specific id
    const { id, project_name, description, technologies, live_link, github_link, image_urls } = projects[req.params.id];
    res.render('project', {id, project_name, description, technologies, live_link, github_link, image_urls});
  }
});

// Creates err to be handled if someone goes to a subdirectory from '/'
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Takes any err that's passed to it by next
app.use((err, req, res, next) => {
  res.locals.error = err;
  res.status(err.status);
  res.render('error');
});

// Launches app on localhost:3000. Able to be run with npm start or nodemon
app.listen(3000, () => {
  console.log('The application is running on localhost:3000!');
});
