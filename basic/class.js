class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  speak() {
    console.log(`${this.name}:hello!`);
  }

  get age() {
    return this._age;
  }

  set age(value) {
    if (value < 0) {
      throw Error('age can not be negative');
    }
    this._age = value;
  }
}

const jh = new Person('jh', 30);
console.log(jh); // Person { name: 'jh', age: 30 }
console.log(jh.name);
console.log(jh.age);
jh.speak();

const user = new Person('kh', 3);
