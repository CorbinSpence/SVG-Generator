const inquirer = require('inquirer')
const jest = require('jest')
const fs = require('fs')

inquirer.prompt([
    {
        type:'input',
        name:'text',
        message:'Enter 3 letter text:',
    },
    {
        type:'input',
        name:'textColor',
        message:'Enter text color:',
    },
    {
        type:'input',
        name:'shape',
        message:'Enter desired shape:',
    },
    {
        type:'input',
        name:'shapeColor',
        message:'Enter shape color:',
    },
]).then((response)=>{
    var svgContent = 
`
<svg width="100" height="100">
    <${response.shape} cx="50" cy="50" r="40" stroke="${response.shapeColor}" stroke-width="4" fill="${response.shapeColor}"/>
    <text x="39" y="54" fill="${response.textColor}">${response.text}</text>
</svg>
`;
    fs.writeFile(`./assets/${response.shapeColor}${response.shape}_${response.textColor}text_${response.text}.svg`, svgContent, (err)=>{err? console.log('failure'):console.log('success')})
})