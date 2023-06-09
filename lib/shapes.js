const validateColor = require('validate-color').default
class Shape{
    constructor(color, text, textColor){
        this.color = color
        this.text = text
        this.textColor = textColor
        this.textRegEx = /^\S\S\S$|^\S\S$|^\S$|^$/
    }
}
Shape.prototype.render = function(){
    if(!this.color || !this.textColor || !validateColor(this.color) || !validateColor(this.textColor)){
        throw new Error('Color must be a name or a hex value.')
    }else if (!this.textRegEx.test(this.text)){
        throw new Error('Text needs to be 0 to 3 letters long.')
    }
    let content =
`
<svg width="300" height="200">
    <circle cx="150" cy="100" r="90" stroke="${this.color}" stroke-width="4" fill="${this.color}"/>
    <text x="39" y="54" fill="${this.textColor}">${this.text}</text>
</svg>
`
    return content
}
module.exports = Shape