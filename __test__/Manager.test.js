const Manager = require('../lib/Manager');

describe('testing employee class', () => {
    const manager= new Manager ('a','b','c','d');

    test('does the manager office # pass into the new obj?', ()=>{
        expect(manager.officeNumber).toBe('d')
        expect(manager.getOfficeNumber()).toBe('d')
 
    })
    test('does the manager office # pass into the new obj?', ()=>{
        expect(manager.getRole()).toBe('Manager')
 
    })
});