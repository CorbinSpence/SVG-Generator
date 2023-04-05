const Triangle = require('./triangle.js')

describe('Triangle', ()=>{
    describe('color', ()=>{
        it('should return svg code in string form.',()=>{
            let t = new Triangle('blue', 'blu', 'white')
            expect(t.render()).toEqual(
`
<svg height="300" width="200">
  <polygon points="100,0 0,300 200,300" style="fill:blue" />
  <text x="90" y="190" fill="white">blu</text>
</svg>
`
            )
        })
    })
})