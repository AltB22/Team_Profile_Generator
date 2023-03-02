const Engineer = require('../lib/Engineer');

describe('testing employee class', () => {
    const engineer = new Engineer ('a','b','c','d','e');

    test('does the github name pass into the new obj?', ()=>{
        expect(engineer.github).toBe('d')
        expect(engineer.getGitHub()).toBe('d')
 
    })
    test('does the getRole function pass into the new obj?', ()=>{
        expect(engineer.getRole()).toBe('Engineer')
 
    })
});