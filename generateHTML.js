


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
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css" 
    integrity="sha512-8bHTC73gkZ7rZ7vpqUQThUDhqcNFyYi2xgDgPDHc+GXVGHXq+xPjynxIopALmOPqzo9JZj0k6OqqewdGO3EsrQ==" 
    crossorigin="anonymous" />
    <head>
        <title>Team Profiles</title>
    </head>
        <title>Document</title>
    </head>
    <body>
        
    </body>
    </html>
    
    
    `

}