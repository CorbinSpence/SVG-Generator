const Circle = require('./circle.js')

describe('Circle', ()=>{
    describe('Color', ()=>{
        it('should return svg code as a string.', ()=>{
            let c = new Circle('blue', 'blu', 'white')
            expect(c.render()).toEqual(
`
<svg width="300" height="200">
    <circle cx="150" cy="100" r="90" stroke="blue" stroke-width="4" fill="blue"/>
    <text x="135" y="100" fill="white">blu</text>
</svg>
`
            )
        })
    })
})