function Person(id, first, last) {
  this.id = id;
  this.first = first;
  this.last = last;
}

Person.prototype.fullName = function () {
    return `${this.first} ${this.last}` 
}


function Employee(id, first, last, roll) {
  Person.call(this,id, first, last);
  console.log(this.first);
  this.roll = roll;
}
Employee.prototype = Object.create(Person.prototype);

const e = new Employee(1, "moti", "limkays", "typer");

console.log(e.fullName());