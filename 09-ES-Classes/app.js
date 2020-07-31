class Person {
  constructor(firstName, lastName,dob) {
    this.firstName = firstName;
      this.lastName = lastName;
      this.birthDay = new Date(dob);
  }

  greeting() {
    return `${this.firstName}`;
    }
    calculateAge() {
        const diff = Date.now() - this.birthDay.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970)
    }

    getMarried(newLastName) {
        this.lastName = newLastName
    }

    static addNumbers(x, y) {
        return x + y;
    }
}

const mary = new Person("Mary", "Williams",'11-13-1980');
console.log(mary.greeting());
console.log(mary.calculateAge());
mary.getMarried("Limkayes");
console.log(mary);
console.log(Person.addNumbers(1,1));