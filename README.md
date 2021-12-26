# MVC Tech Blog

![Tech Blog Website - Homepage](./demo/techblog-1.png)

Tech Blog is a blogging website that allows user to publish their own posts about tech, coding, and anything else related to the tech world! This is a CMS-style blog that is built with the MVC (model-view-controller) paradigm with Handlebars.js as the HTML template language, Sequelize as the ORM (object-relational mapping), and the Express-Session npm package for user authentication. 

When users first visit the Tech Blog homepage, they are able to view existing blog posts from the users and can navigate to either to the homepage (Home) or to the login page (Login). Clicking on post links when not logged in just present the visible post and comments. Accessing other links will redirect unlogged users to the login page, where registered users can login. New users are able to register to use Tech Blog by clicking on the Sign Up Here button where they will sign up by entering in a username and password. From there, their user credentials are saved and users are now able to access the website.

![Tech Blog Website - Login](./demo/techblog-2.png)
![Tech Blog Website - Sign-Up](./demo/techblog-3.png)

When signed in, registered users are able to see the navigation links for the homepage (Home), the dashboard (Dashboard), and to log out (Logout).  The homepage presents the existing blog posts with the post title and post date; users can click on the blog post link where the title, post content, creator's username and date is presented. 




Acceptance Criteria

THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
WHEN I am idle on the site for more than a set time
THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments

Getting Started
Your application’s folder structure must follow the Model-View-Controller paradigm. You’ll need to use the express-handlebars (Links to an external site.) package to use Handlebars.js for your Views, use the MySQL2 (Links to an external site.) and Sequelize (Links to an external site.) packages to connect to a MySQL database for your Models, and create an Express.js API for your Controllers.

You’ll also need the dotenv package (Links to an external site.) to use environment variables, the bcrypt package (Links to an external site.) to hash passwords, and the express-session (Links to an external site.) and connect-session-sequelize (Links to an external site.) packages to add authentication.

NOTE
The express-session (Links to an external site.) package stores the session data on the client in a cookie. When you are idle on the site for more than a set time, the cookie will expire and you will be required to log in again to start a new session. This is the default behavior and you do not have to do anything to your application other than implement the npm package.

How to Submit the Challenge
You are required to submit BOTH of the following for review:

The URL of the functional, deployed application. - on Heroku
https://vast-brushlands-11504.herokuapp.com/

The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.
https://github.com/trujilml/mvc-tech-blog

Programs User
Heroku 
JawsDB MySQL - for site deployment and mysql 

    "bcrypt": "^5.0.1",
    "connect-session-sequelize": "^7.1.2",
    "dotenv": "^10.0.0",
    "express": "^4.17.2",
    "express-handlebars": "^6.0.2",
    "express-session": "^1.17.2",
    "mysql2": "^2.3.3",
    "nodemon": "^2.0.15",
    "sequelize": "^6.12.2",
    "session": "^0.1.0"


Developer Notes
Added generated seed files to demonstrate comments, posts, and users for testing purposes. To generate, run `npm run seeds` in your terminal with Nodemon installated to view the test examples.

Comments can be added but cannot be deleted or edited. will be a future implementation. 


