const Engineer = require('../lib/Engineer');

describe('testing employee class', () => {
    const engineer = new Engineer ('a','b','c','d');

    test('does the github name pass into the new obj?', ()=>{
        expect(engineer.github).toBe('d')
 
    })
});