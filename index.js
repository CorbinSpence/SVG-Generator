const inquirer = require('inquirer')
const jest = require('jest')
const fs = require('fs')
const Square = require('./lib/square.js')
const Circle = require('./lib/circle.js')
const Triagle = require('./lib/triangle.js')
const shapeDimensions = {
    circle:'cx="50" cy="50" r="90"',
    rect:'width="300" height="200"',
    ellipse:'cx="50" cy="50" rx="30" ry="40"'
}
const objects = {
    circle: Circle,
    square: Square,
    triangle: Triagle,
}
var shapes = ['circle', 'triangle', 'square']

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
        type:'list',
        name:'shape',
        message:'Choose desired shape:',
        choices:[...shapes],
    },
    {
        type:'input',
        name:'shapeColor',
        message:'Enter shape color:',
    },
]).then((response)=>{
    var shape = new objects[response.shape](response.shapeColor, response.text, response.textColor)
    var svgContent = shape.render()
    fs.writeFile(`./assets/${response.shapeColor}${response.shape}_${response.textColor}text_${response.text}.svg`, svgContent, (err)=>{err? console.log('failure'):console.log('success')})
})