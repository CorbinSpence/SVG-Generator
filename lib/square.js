const Shape = require('./shapes.js')
const validateColor = require('validate-color').default

class Square extends Shape{
    constructor(color, text, textColor){
        super(color, text, textColor)
    }
}
Square.prototype.render = function(){
    if(!this.color || !this.textColor || !validateColor(this.color) || !validateColor(this.textColor)){
        throw new Error('Color must be a name or a hex value.')
    }else if (!this.textRegEx.test(this.text)){
        throw new Error('Text needs to be 0 to 3 letters long.')
    }
    let content =
`
<svg width="300" height="200">
    <rect width="200" height="200" stroke="${this.color}" stroke-width="4" fill="${this.color}"/>
    <text x="90" y="100" fill="${this.textColor}">${this.text}</text>
</svg>
`
    return content
}
module.exports = Square