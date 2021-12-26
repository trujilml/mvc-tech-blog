# MVC Tech Blog

![Tech Blog Website - Homepage](./demo/techblog-1.png)

Tech Blog is a blogging website that allows user to publish their own posts about tech, coding, and anything else related to the tech world! This is a CMS-style blog that is built with the MVC (model-view-controller) paradigm with Handlebars.js as the HTML template language, Sequelize as the ORM (object-relational mapping), and the Express-Session npm package for user authentication. 

## Description

When users first visit the Tech Blog homepage, they are able to view existing blog posts from the users and can navigate to either to the homepage (Home) or to the login page (Login). Clicking on post links when not logged in just present the visible post and comments. Accessing other links will redirect unlogged users to the login page, where registered users can login. New users are able to register to use Tech Blog by clicking on the Sign Up Here button where they will sign up by entering in a username and password. From there, their user credentials are saved and users are now able to access the website.

![Tech Blog Website - Login](./demo/techblog-2.png)
![Tech Blog Website - Sign-Up](./demo/techblog-3.png)

When signed in, registered users are able to see the navigation links for the homepage (Home), the dashboard (Dashboard), and to log out of the website (Logout).  The homepage presents the existing blog posts with the post title and post date; users can click on the blog post link where the title, post content, creator's username and date is presented. They also have the option to leave a comment as shown below. Once posted, it will update the post link to display the comment, the comment user's username, and the date when the comment was made.

![Tech Blog Website - Comment](./demo/techblog-5.png)
![Tech Blog Website - Post and Comment](./demo/techblog-6.png)

The dashboard presents the user's content which presents any blog posts they have created and the option to add a new blog post to the site.

![Tech Blog Website - Dashboard](./demo/techblog-7.png)

When the button to add a new blog post is clicked on the user, the user is able to create their blog post by entering in a title and the content they want to enter. Once completed, the user can submit their blog post by clicking on the Create button. Their blog post is saved and the user is then taken back to the updated dashboard with their new post present.

![Tech Blog Website - Add Post](./demo/techblog-4.png)

When accessing an existing user-made post on the dashboard, the user is able to delete or update their existing post where it will take the user back to an updated dashboard.

![Tech Blog Website - Edit/Delete Post](./demo/techblog-8.png)

## Table of Contents
- [Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [Developed With](#Developed-With)
- [Developer Notes and Further Ideas](#Developer-Notes-and-Further-Ideas)

## Installation
Although the link is deployed to Heroku, the following steps below are listed in case to review the database, models, and the seed files demonstrating the site functionality.

- The following npm packages listed in the `Developed With` tab are required to install in order to access and demonstrate the routes of the database.
- This file can be cloned through GitHub into your own repository by selecting the above Code button.
- To view the database through MySQL, please type `mysql -u root -p`. Please note that with the dotenv package, you will need to add your MySQL password in the respective .env file and add it to the .gitignore file in order to prevent confidental information from leaking.
- When in the MySQL command line, source the database by entering `source db/schema.sql;`.
- Then, `npm run seeds` to seed the file and obtain data to generate when viewing the posts, comments, and users of Tech Blog.
- Start the server by entering `node server.js` and visit the localhost:3001 link to view the seeds file within the Tech Blog webpage.

## Usage
The URL of the functional, deployed application on Heroku.
https://vast-brushlands-11504.herokuapp.com/

The URL of the GitHub repository. 
https://github.com/trujilml/mvc-tech-blog

## Developed With
The application follows the Model-View-Controller paradigm.
- Express-Handlebars - 
- MySQL2 - 
- Sequelize - 
- Express.js - API 

- Dotenv 
- bcrypt 
- express-session 
- connect-session-sequelize 

 
-  Nodemon 
Developer Notes
Added generated seed files to demonstrate comments, posts, and users for testing purposes. To generate, run `npm run seeds` in your terminal with Nodemon installated to view the test examples.


    Programs Used to generate deployed web link 
Heroku 
JawsDB MySQL - for site deployment and mysql 

-JavaScript 
-CSS
-HTML



Getting Started
Your application’s folder structure must follow the Model-View-Controller paradigm. You’ll need to use the express-handlebars (Links to an external site.) package to use Handlebars.js for your Views, use the MySQL2 (Links to an external site.) and Sequelize (Links to an external site.) packages to connect to a MySQL database for your Models, and create an Express.js API for your Controllers.

You’ll also need the dotenv package (Links to an external site.) to use environment variables, the bcrypt package (Links to an external site.) to hash passwords, and the express-session (Links to an external site.) and connect-session-sequelize (Links to an external site.) packages to add authentication.

NOTE
The express-session (Links to an external site.) package stores the session data on the client in a cookie. When you are idle on the site for more than a set time, the cookie will expire and you will be required to log in again to start a new session. This is the default behavior and you do not have to do anything to your application other than implement the npm package.

How to Submit the Challenge
You are required to submit BOTH of the following for review:

## Developer Notes and Further Ideas

- Developer Notes
Seed files of the Comment, User, and Post model were added for testing purposes to test the website's functionality. To view and test the Seed files, review the [Installation](#Installation) tab above. 

- Further Ideas
Comments on Tech Blog can only be added. They cannot be deleted or edited as this time. This is considered for a future site implementation.