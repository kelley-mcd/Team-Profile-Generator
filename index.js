const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },
    {
      type: 'input',
      name: 'location',
      message: 'Where are you from?',
    },
    {
      type: 'input',
      name: 'hobby',
      message: 'What is your favorite hobby?',
    },
    {
      type: 'input',
      name: 'food',
      message: 'What is your favorite food?',
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username',
    },
    {
      type: 'input',
      name: 'linkedin',
      message: 'Enter your LinkedIn URL.',
    },
  ]);
};

const generateHTML = (answers) =>
  `<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
      <title>My Team</title>
  </head>
  
  <body>
      <div class="jumbotron jumbotron-fluid">
          <div class="container">
              <h1 class=" text-center display-4 ">My Team</h1>
          </div>
      </div>
  
      <div class="container card-group">
          <div class="row">
              <div class="col-sm-6">
                  <div class="card" style="width: 18rem;">
                      <div class="card-body">
                          <h5 class="card-title">Card title</h5>
                          <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                          <a href="#" class="card-link">Card link</a>
                          <a href="#" class="card-link">Another link</a>
                      </div>
                  </div>
              </div>
          </div>
  
          <div class="row">
              <div class="col-sm-6">
                  <div class="card" style="width: 18rem;">
                      <div class="card-body">
                          <h5 class="card-title">Card title</h5>
                          <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                          <a href="#" class="card-link">Card link</a>
                          <a href="#" class="card-link">Another link</a>
                      </div>
                  </div>
              </div>
          </div>
  
          <div class="row">
              <div class="col-sm-6">
                  <div class="card" style="width: 18rem;">
                      <div class="card-body">
                          <h5 class="card-title">Card title</h5>
                          <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                          <a href="#" class="card-link">Card link</a>
                          <a href="#" class="card-link">Another link</a>
                      </div>
                  </div>
              </div>
          </div>
  
          <div class="row">
              <div class="col-sm-6">
                  <div class="card" style="width: 18rem;">
                      <div class="card-body">
                          <h5 class="card-title">Card title</h5>
                          <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                          <a href="#" class="card-link">Card link</a>
                          <a href="#" class="card-link">Another link</a>
                      </div>
                  </div>
              </div>
          </div>
  
          <div class="row">
              <div class="col-sm-6">
                  <div class="card" style="width: 18rem;">
                      <div class="card-body">
                          <h5 class="card-title">Card title</h5>
                          <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                          <a href="#" class="card-link">Card link</a>
                          <a href="#" class="card-link">Another link</a>
                      </div>
                  </div>
              </div>
          </div>
  
      </div>
  
  
  </body>
  
  </html>`;


const init = () => {
  promptUser()
    .then((answers) => writeFileAsync('index.html', generateHTML(answers)))
    .then(() => console.log('Successfully wrote to index.html'))
    .catch((err) => console.error(err));
};

init();
