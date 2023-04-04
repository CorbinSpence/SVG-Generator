const Shape = require('./shapes.js')
const { toInteger } = require("lodash")
const validateColor = require('validate-color').default
const hexRegEx = /^#[1-9|A-F|a-f][1-9|A-F|a-f][1-9|A-F|a-f][1-9|A-F|a-f][1-9|A-F|a-f][1-9|A-F|a-f]$/
const textRegEx = /^\S\S\S$|^\S\S$|^\S$|^$/
class Rectangle extends Shape{
    constructor(color, text, height, width){
        super(color, text)
        this.height = height
        this.width = width
    }
}
Rectangle.prototype.render = function(){
    if(isNaN(parseInt(this.height))||isNaN(parseInt(this.width))){
        console.log("Height is :"+this.height)
        throw new Error('Height and width need to be numbers.')
    }else if(parseInt(this.height)<=0||parseInt(this.width)<=0){
        console.log("Height is :"+this.height)
        throw new Error('Height and width need to be greater than 0.')
    }else if(this.color && validateColor(this.color)){
        throw new Error('Color needs to be name or hex value')
    }else if(this.text && textRegEx.test(this.text)){
        throw new Error('text needs to be 0 to 3 characters long')
    }
}
module.exports = Rectangle;