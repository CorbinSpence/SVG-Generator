const { default: expect } = require('expect')
const Rectangle = require('./rectangle.js')

describe('rectangle', ()=>{
    describe('color', ()=>{
        it('should return an error if color is niether a color name or hex code.', ()=>{
            let test = new Rectangle('abuhb', 'cas', 100, 100)
            expect(test.render).toThrow()
        })
    })
})
describe('rectangle', ()=>{
    describe('color', ()=>{
        it('should not return an error for using a color name.', ()=>{
            let test = new Rectangle('blue', 'cas', 100, 100)
            console.log("Test Object is"+test.height)
            expect(test.render).not.toThrow()
        })
    })
})
// describe('rectangle', ()=>{
//     describe('text', ()=>{
//         it('should return an error if color is niether a color name or hex code.', ()=>{
//             let test = new Rectangle('abuhb', 'cas', 100, 100)
//             expect(test.render).toThrow()
//         })
//     })
// })
// describe('rectangle', ()=>{
//     describe('height', ()=>{
//         it('should return an error if color is niether a color name or hex code.', ()=>{
//             let test = new Rectangle('blue', 'cas', 100, 100)
//             expect(test.render).toThrow()
//         })
//     })
// })
// describe('rectangle', ()=>{
//     describe('width', ()=>{
//         it('should return an error if color is niether a color name or hex code.', ()=>{
//             let test = new Rectangle('abuhb', 'cas', 100, 100)
//             expect(test.render).toThrow()
//         })
//     })
// })