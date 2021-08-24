const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name1',
            message: 'Employee 1:What is your name?',
        },
        {
            type: 'input',
            name: 'position1',
            message: 'What is your position at the company?',
        },
        {
            type: 'input',
            name: 'id1',
            message: 'What is your ID number? (ID=0 if you are an intern)',
        },
        {
            type: 'input',
            name: 'email1',
            message: 'What is your email address?',
        },
        {
            type: 'input',
            name: 'github1',
            message: 'Enter your GitHub Username',
        },
        {
            type: 'input',
            name: 'name2',
            message: 'Employee 2:What is your name?',
        },
        {
            type: 'input',
            name: 'position2',
            message: 'What is your position at the company?',
        },
        {
            type: 'input',
            name: 'id2',
            message: 'What is your ID number? (ID=0 if you are an intern)',
        },
        {
            type: 'input',
            name: 'email2',
            message: 'What is your email address?',
        },
        {
            type: 'input',
            name: 'github2',
            message: 'Enter your GitHub Username',
        },
        {
            type: 'input',
            name: 'name3',
            message: 'Employee 3:What is your name?',
        },
        {
            type: 'input',
            name: 'position3',
            message: 'What is your position at the company?',
        },
        {
            type: 'input',
            name: 'id3',
            message: 'What is your ID number? (ID=0 if you are an intern)',
        },
        {
            type: 'input',
            name: 'email3',
            message: 'What is your email address?',
        },
        {
            type: 'input',
            name: 'github3',
            message: 'Enter your GitHub Username',
        },
        {
            type: 'input',
            name: 'name4',
            message: 'Employee 4: What is your name?',
        },
        {
            type: 'input',
            name: 'position4',
            message: 'What is your position at the company?',
        },
        {
            type: 'input',
            name: 'id4',
            message: 'What is your ID number? (ID=0 if you are an intern)',
        },
        {
            type: 'input',
            name: 'email4',
            message: 'What is your email address?',
        },
        {
            type: 'input',
            name: 'github4',
            message: 'Enter your GitHub Username',
        },
        {
            type: 'input',
            name: 'name5',
            message: 'Employee 5: What is your name?',
        },
        {
            type: 'input',
            name: 'position5',
            message: 'What is your position at the company?',
        },
        {
            type: 'input',
            name: 'id5',
            message: 'What is your ID number? (ID=0 if you are an intern)',
        },
        {
            type: 'input',
            name: 'email5',
            message: 'What is your email address?',
        },
        {
            type: 'input',
            name: 'github5',
            message: 'Enter your GitHub Username',
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
                            <h5 class="card-title">${answers.name1}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">${answers.position1}</h6>
                            <h6 class="card-subtitle mb-2 text-muted">Employee ID:${answers.id1}</h6>
                            <a href="https://github.com/${answers.github1}" class="card-link">GitHub Link</a>
                            <a href="${answers.email1}" class="card-link">Email Link</a>
                        </div>
                    </div>
                </div>
            </div>
    
            <div class="row">
                <div class="col-sm-6">
                    <div class="card" style="width: 18rem;">
                        <div class="card-body">
                            <h5 class="card-title">${answers.name2}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">${answers.position2}</h6>
                            <h6 class="card-subtitle mb-2 text-muted">Employee ID:${answers.id2}</h6>
                            <a href="https://github.com/${answers.github2}" class="card-link">GitHub Link</a>
                            <a href="${answers.email2}" class="card-link">Email Link</a>
                        </div>
                    </div>
                </div>
            </div>
    
    
            <div class="row">
                <div class="col-sm-6">
                    <div class="card" style="width: 18rem;">
                        <div class="card-body">
                            <h5 class="card-title">${answers.name3}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">${answers.position3}</h6>
                            <h6 class="card-subtitle mb-2 text-muted">Employee ID:${answers.id3}</h6>
                            <a href="https://github.com/${answers.github3}" class="card-link">GitHub Link</a>
                            <a href="${answers.email3}" class="card-link">Email Link</a>
                        </div>
                    </div>
                </div>
            </div>
    
    
            <div class="row">
                <div class="col-sm-6">
                    <div class="card" style="width: 18rem;">
                        <div class="card-body">
                            <h5 class="card-title">${answers.name4}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">${answers.position4}</h6>
                            <h6 class="card-subtitle mb-2 text-muted">Employee ID:${answers.id4}</h6>
                            <a href="https://github.com/${answers.github4}" class="card-link">GitHub Link</a>
                            <a href="${answers.email4}" class="card-link">Email Link</a>
                        </div>
                    </div>
                </div>
            </div>
    
    
            <div class="row">
                <div class="col-sm-6">
                    <div class="card" style="width: 18rem;">
                        <div class="card-body">
                            <h5 class="card-title">${answers.name5}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">${answers.position5}</h6>
                            <h6 class="card-subtitle mb-2 text-muted">Employee ID:${answers.id5}</h6>
                            <a href="https://github.com/${answers.github5}" class="card-link">GitHub Link</a>
                            <a href="${answers.email5}" class="card-link">Email Link</a>
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
