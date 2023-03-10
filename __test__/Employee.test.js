//Qualifies data for Employee Class

const Employee = require('../lib/Employee');

describe('testing employing class', () => {
    const employee = new Employee('a', 'b', 'c');

    test('does the name pass into the new obj?', ()=>{
        expect(employee.name).toBe('a')
        expect(employee.getName()).toBe('a')
       
    })
    test('does the id pass into the new obj?', ()=>{
        expect(employee.id).toBe('b')
        expect(employee.getId()).toBe('b')
   
    })
    test('does the email pass into the new obj?', ()=>{
        expect(employee.email).toBe('c')
        expect(employee.getEmail()).toBe('c')
 
    })

    
});



