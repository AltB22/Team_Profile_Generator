const Intern = require('../lib/Intern');

describe('testing employee class', () => {
    const intern= new Intern ('a','b','c','d');

    test('does the intern school pass into the new obj?', ()=>{
        expect(intern.school).toBe('d')
 
    })
});