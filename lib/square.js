const { toInteger } = require("lodash")

class Square extends Shape{
    constructor(color, size){
        super(color)
        this.size = size
    }
}
Square.prototype.render = function(){
    if(isNaN(toInteger(this.size))){
        return new Error('Value must be a number.')
    }else if(this.size<=0){
        return new Error('Size must be greater than 0.')
    }
}