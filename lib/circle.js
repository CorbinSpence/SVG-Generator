const { toInteger } = require("lodash")

class Circle extends Ellipse{
    constructor(color, radius, centerPos){
        super(color, radius, radius, centerPos)
        this.radius = radius
    }
}
Circle.prototype.render = function(){
    if(isNaN(toInteger(this.radius))){
        return new Error('Radius needs to be a number.')
    }else if(toInteger(this.radius)<=0){
        return new Error('Radius needs to be greater than 0.')
    }
}