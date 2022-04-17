
// TODO: Create a function to generate markdown for README
function generateMarkdown({title, description, installation, usage, license, contributing, tests, questions, email}) {
    return `# ${title}
  
    ![License](https://img.shields.io/badge/LICENSE-${license}-green)
    
   
    ## Description
  
    ${description}
  
    ## Table of Contents
  
    * [Description](#description)
    * [Installation](#installation)
    * [Usage](#usage)
    * [License](#license)
    * [Contributing](#contributing)
    * [Tests](#tests)
    * [Questions](#questions)
  
  
    ## Installation
  
    ### run the following code to operate app:
  
    ${installation}
    
    ## Usage
  
    ${usage}
    
    ## License
  
    This app is licensed under the ${license} license.
    
    ## Contributing
  
    ### This is who contributed on this project:
  
    ${contributing}
    
    ## Tests
  
    ${tests}
    
    ## Questions
  
    ### If you have any questions or comments, see Github account or email at:
  
    [GitHub](https://github.com/${questions})
  
    [Email](mailto:${email})
  
  `;
  }
  
  module.exports = generateMarkdown;
  