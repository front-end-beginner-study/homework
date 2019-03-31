export const sum = (a, b) => {
  return a + b;
};

// 사람에 대한 객체 속성, 행위
// 01. 객체만들기
// const person1 = {
//   name: '지한솔',
//   age: '30',
//   say: function say() {
//     return '안녕하세요';
//   },
// };

// const person2 = {
//   name: '김슬비',
//   age: '29',
//   say: function say() {
//     return '안뇽';
//   },
// };

// const person3 = {
//   name: '김박박',
//   age: '29',
//   say: function say() {
//     return '김박박입니다';
//   },
// };

// 02. 생성자 함수 만들기 :: 초기화
// this :: 생성된 인스턴스
// var Person = function(name, age) {
//   this.name = name;
//   this.age = age;
// };
// Person.prototype.sayHello = function() {
//   return `나의 이름은 ${this.name}이고 나이는${this.age}입니다.`;
// };

// const person1 = new Person('지한솔', '20');
// const person2 = new Person('김박박', '22');
// const person3 = new Person('김김김', '3344');
// person1.sayHello();
// person2.sayHello();

// 03. getter, setter
// 접근이 쉬워서 값을 바꿀 수 있기 때문에 사용
