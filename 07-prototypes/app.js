function Person(firstName, lastNAme, dob) {
  this.firstName = firstName;
  this.lastNAme = lastNAme;
  this.birthDay = new Date(dob);
}

// calculate age
Person.prototype.calculateAge = function () {
  const diff = Date.now() - this.birthDay.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};


Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastNAme}`;
}


Person.prototype.getMarried = function (newLastName) {
    this.lastNAme = newLastName;
}


const p = new Person("moti", "limkayes", "8-12-90");
const p2 = new Person("Mary", "Johnson", "march 20 1978");

console.log(p2.getFullName());
p2.getMarried("Limkayes");
console.log(p2.getFullName());

console.log(p2.hasOwnProperty("firstName"))

