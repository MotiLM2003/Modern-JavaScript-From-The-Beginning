function Person(first, last) {
  this.first = first;
  this.last = last;
}

// // Greetng
// Person.prototype.greeting = function () {
//   return `Hello there ${this.first} ${this.last}`;
// };
// const p1 = new Person("moti", "limkayes");

function Customer(first, last, phone, membership) {
  Person.call(this, first, last);
  this.phone = phone;
  this.membership = membership;
}

const c1 = new Customer(1, 'moti',' limkays'," somthing")
console.log(c1);

// Customer.prototype = Object.create(Person.prototype)
// const c1 = new Customer("tom", "smith", "0586552717", "Standred");
// Customer.prototype.constructor = Customer;

// Customer.prototype.greeting = function () {
//     return "Hello from customr!"
//    }
// console.log(c1.greeting());
