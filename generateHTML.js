


function generateHTML(data) {
    function renderManager(manager) {
        return `<div class="ui card">
        <div class="content">
          <div class="header">${manager.name}</div>
          <div class="meta">
            <span class="category">${manager.getRole()}</span>
          </div>
          <div class="description">
           ${manager.email}
          </div>
        </div>
        <div class="extra content">
          <div class="right floated author">
            ${manager.officenumber}
          </div>
        </div>
      </div>`
    }
    function renderEngineer(engineers) {
        let engineerHTML = '';
        engineers.forEach(engineer => {
            engineerHTML += `<div class="ui card">
        <div class="content">
          <div class="header">${engineer.name}</div>
          <div class="meta">
            <span class="category">${engineer.getRole()}</span>
          </div>
          <div class="description">
           ${engineer.email}
          </div>
        </div>
        <div class="extra content">
          <div class="right floated author">
            ${engineer.githubID}
          </div>
        </div>
      </div>`
        })
        return engineerHTML;
    }
    function renderIntern(interns) {
        let internHTML = '';
        interns.forEach(intern => {
            internHTML += `<div class="ui card">
        <div class="content">
          <div class="header">${intern.name}</div>
          <div class="meta">
            <span class="category">${intern.getRole()}</span>
          </div>
          <div class="description">
           ${intern.email}
          </div>
        </div>
        <div class="extra content">
          <div class="right floated author">
            ${intern.school}
          </div>
        </div>
      </div>`
        })
        return internHTML;
    }
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css" 
    integrity="sha512-8bHTC73gkZ7rZ7vpqUQThUDhqcNFyYi2xgDgPDHc+GXVGHXq+xPjynxIopALmOPqzo9JZj0k6OqqewdGO3EsrQ==" 
    crossorigin="anonymous" />
   
        <title>Team Profiles</title>
        <style>
        .employeeRow {
            display: flex;
        }
        .companylogo {
            text-align: center;
        }
        </style>
        </head>
    <body>
    <h1 class="ui header companylogo">
   
      Our Company
    

  </h1>
  <div> ${renderManager(data[0])}
    </div>
    <div class="employeeRow"> ${renderEngineer(data.filter(employee => employee.getRole() === "Engineer"))}
    ${renderIntern(data.filter(employee => employee.getRole() === "Intern"))}
    </div>
    </body>
    
    </html>
    
    
    `

}
module.exports = generateHTML;