// object : collection of key value pair 
    // in this example laptop is the object and rest are the properties.
const laptop = {
    color:'red',
    model:'c392'
}

console.log(laptop.color);

//another example

const person={
    name:'suraj',
    age:24,
    profession:'student'
}

console.log(person.age)


// classes
class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
  }
  
  const myCar = new Car("Ford", 2014);
  document.getElementById("demo").innerHTML =
  myCar.name + " " + myCar.year;

// The example above creates a class named "Car".

// The class has two initial properties: "name" and "year".