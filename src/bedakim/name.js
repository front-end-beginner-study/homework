import { create } from 'domain';

//  사람 속성

const person1 = {
  name: 'beda',
  age: 30,
  hobby: 'baseBall',
};

const person2 = {
  name: 'stan',
  age: 20,
  hobby: 'soccer',
};

const person3 = {
  name: 'minyeob',
  age: 10,
  hobby: 'tennis',
};
/////////////////////////////

const personPrototype = {
  name: '',
  age: '',
  hobby: '',
};

const person4 = Object.create(personPrototype);

person4.name = 'beda';
console.log(person4.name);

//////
// console.log(person);
// const person = new Person('111', 11);

var Person = function(name, age) {
  this.name = name;
  this.age = age;
  this.isAdult = age > 19;
  // this.sayIntroduce = function() {
  //   return `나의 이름은 ${this.name}이고 나의 나이는 ${this.age} 입니다.`;
  // };
};

/////

Person.prototype.say = function() {
  return `나의 이름은 ${this.name}이고 나의 나이는 ${this.age} 입니다.`;
};

const person5 = new Person('하하', 11);

person5.name;
person5.getName();
person5.name = 'dsdas';
person5.setName();
