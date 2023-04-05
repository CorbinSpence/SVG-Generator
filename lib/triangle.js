const Shape = require('./shapes.js')
const validateColor = require('validate-color').default

class Triangle extends Shape{
    constructor(color, text, textColor){
        super(color, text, textColor)
    }
}
Triangle.prototype.render = function(){
    if(!this.color || !this.textColor || !validateColor(this.color) || !validateColor(this.textColor)){
        throw new Error('Color must be a name or a hex value.')
    }else if (!this.textRegEx.test(this.text)){
        throw new Error('Text needs to be 0 to 3 letters long.')
    }
    let content =
`
<svg height="300" width="200">
  <polygon points="100,0 0,300 200,300" style="fill:${this.color}" />
  <text x="90" y="190" fill="${this.textColor}">${this.text}</text>
</svg>
`
    return content
}
module.exports = Triangle