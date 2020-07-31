class Person  {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greeting() {
      return `Hello there ${this.firstName} ${this.lastName}`
  }
}


class Customer extends Person {

  constructor(firstName, lastName, phone, membership) {
    super(firstName, lastName)
    this.phone = phone;
    this.membership = membership;
  }

  static getMembershipCost() {
    return 500;
  }
}


const c = new Customer("Moti", "Limkayes", '5555-55--55-5', 'payroll');
console.log(c.greeting())
console.log(Customer.getMembershipCost())