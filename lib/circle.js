const Shape = require('./shapes.js')
const validateColor = require('validate-color').default

class Circle extends Shape{
    constructor(color, text, textColor){
        super(color, text, textColor)
    }
}
Circle.prototype.render = function(){
    if(!this.color || !this.textColor || !validateColor(this.color) || !validateColor(this.textColor)){
        throw new Error('Color must be a name or a hex value.')
    }else if (!this.textRegEx.test(this.text)){
        throw new Error('Text needs to be 0 to 3 letters long.')
    }
    let content =
`
<svg width="300" height="200">
    <circle cx="150" cy="100" r="90" stroke="${this.color}" stroke-width="4" fill="${this.color}"/>
    <text x="135" y="100" fill="${this.textColor}">${this.text}</text>
</svg>
`
    return content
}
module.exports = Circle