const Square = require('./square.js')

describe('Square', ()=>{
    describe('color', ()=>{
        it('should return svg code in string form.',()=>{
            let t = new Square('blue', 'blu', 'white')
            expect(t.render()).toEqual(
`
<svg width="300" height="200">
    <rect width="200" height="200" stroke="blue" stroke-width="4" fill="blue"/>
    <text x="90" y="100" fill="white">blu</text>
</svg>
`
            )
        })
    })
})