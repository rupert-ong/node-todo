# Node.js Todo app
A simple Node.js Todo app using Express, EJS and MongoDB (Mongoose) as seen on NetNinja. 

**Enhancements include**:
* Remove jQuery dependency and using vanilla ES6 JavaScript
* Remove page reload upon successful ajax calls, and programatically adding and removing node elements
* Separate route and controller logic and cleaning up the app.js file

## Getting Started 

### Prerequisites

You will need the following installed on your system
* [Node and NPM](https://nodejs.org)
* [MongoDB]()
* [Git](https://git-scm.com/)

### Installation

Clone the repo and install the dependencies in the command line:
```
npm install
```
Rename `nodemon.json-template` to `nodemon.json` and add your MongoDB connection to the environment variables:
```json
{
  "env": {
    "MONGODB_CONNECTION" : "mongodb://username:password@host1:port/dbname"
  }
}
```
Then start the server (if using MongoDB locally, be sure to run it before starting the server):
```
npm run start
```

## Built with
- Node.js and Express
- MongoDB and Mongoose
- EJS
