// cypress/e2e/person_employee_spec.js

// Define the Person and Employee classes in the test file

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
    }
}

class Employee extends Person {
    constructor(name, age, jobTitle) {
        super(name, age);
        this.jobTitle = jobTitle;
    }

    jobGreet() {
        console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
    }
}

describe('Person and Employee Classes', () => {
    it('should greet correctly for Person class', () => {
        const person = new Person("Alice", 25);
        cy.spy(console, 'log').as('consoleLog');
        person.greet();
        cy.get('@consoleLog').should('be.calledWith', 'Hello, my name is Alice, I am 25 years old.');
    });

    it('should greet correctly for Employee class', () => {
        const employee = new Employee("Bob", 30, "Manager");
        cy.spy(console, 'log').as('consoleLog');
        employee.jobGreet();
        cy.get('@consoleLog').should('be.calledWith', 'Hello, my name is Bob, I am 30 years old, and my job title is Manager.');
    });
});
