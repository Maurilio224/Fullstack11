class Person {
  constructor(firstName,lastName,age){
    this._firstName=firstName
    this._lastName=lastName
    this._age=age
  }
  set firstName(value){
    if (typeof value == String){
      this._firstName = value
    }else{console.log("not a string")}
  }
  get firstName(){return this._firstName}

  set lastName(value){
    if (typeof value == String){
      this._lastName = value
    }else{console.log("not a string")}
  }
  get lastName(){return this._lastName}

  set age(value){
    if (typeof value == Number){
      this._age = value
    }else{console.log("not a number")}
  }
  get age(){return this._age}
  get fullName(){return this._firstName +" "+this._lastName +" "+ this._age}
}

const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName);

person._firstName = 'Maria';
person._lastName = 'Verdi';
console.log(person.fullName);