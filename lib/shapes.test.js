const Shape = require('./shapes.js')

describe('Shape', ()=>{
    describe('Color', ()=>{
        it('should return svg code as a string.', ()=>{
            let s = new Shape('blue', 'blu', 'white')
            expect(s.render()).toEqual(
`
<svg width="300" height="200">
    <circle cx="150" cy="100" r="90" stroke="blue" stroke-width="4" fill="blue"/>
    <text x="39" y="54" fill="white">blu</text>
</svg>
`
            )
        })
    })
})