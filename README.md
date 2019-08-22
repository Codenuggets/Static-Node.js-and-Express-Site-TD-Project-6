# Static Node.js and Express Site TD Project 6
 Portfolio site built with Node.js and Express

## app.js
This file sets up express and sets the `view engine` to pug. It then renders all the routes. The routes rendered are the `/index`, `/about`, and projects are rendered at `/projects/:id`. There is a conditional in the `/projects/:id` route to handle and render an `error` route if a user types in an id that doesn't correlate with a project id. There is also an error route handling for all other routes.

## Views
 The routes are shown by rendering views written in `pug` templating.

### layout.pug
This is the view that the other views extend from. It sets up the title, stylesheets, scripts and the side bar for the other views to use.

### index.pug
This renders the homepage for the site and displays all the projects by iterating through them and displaying a thumbnail image and title for each

### about.pug
This view just displays my elevator pitch, the skills I have and links to my social media

### project.pug
This view takes the project that matches the id passed in the url. If a project exists, the information shown is added with interpolation. The `project_name` and `description`, the `technologies` array is looped through to list all the technologies and the `image_urls` array is looped through and shown after a conditional is checked to make sure the thumbnail image isn't shown

### error.pug

## Additional Stylings
Additional stylings to add a  personal flair to the project can be found at `public/css/personalstyles.css`. The styles listed changed the `background-color` of `body` to a light gray, round out the edges of the images with `border-radius`, change the color of the side bar to a shade of blue and adjust the text color within the sidebar to show better in the new color.
