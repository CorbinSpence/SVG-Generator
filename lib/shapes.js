class Shape{
    constructor(color, text){
        this.color = color
        this.text = text
    }
}
Shape.prototype.render = function(){
    return new Error('Shape not specified.')
}
module.exports = Shape