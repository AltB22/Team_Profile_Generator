const Employee = require('./Employee')

class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.offieNumber = officeNumber
    }
    getOfficeNumber(){
        return this.offieNumber
    }
    getRole(){
        return "Manager"
}
}

module.exports = Manager