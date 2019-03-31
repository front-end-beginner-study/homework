export  function plus(x,y){
    return x+ y;
}


사람3 속성,행위

var Person = function(name,say){
    this.name = name;
    this.isAdult = age > 19;
}
//Person은 함수여서 끝을;;
Person.prototype.say = function(){
    return 'saying' + this.name;
    
}
var sarah = new Person('sarah');
var amy = new Person('amy');
var jane = new Person('jane');
//생성자 함수는 무조건 대문자로 시작
//생성자함수의 this -> 생성된 인스턴스 가리킴
const person1 = new Person('ahha',12);
person1.isAdult = true;
console.log(person1);

//sarah는 객체여서 끝을,,
const sarah ={
    name = 'sarah',
    say = function(){
        return 'saying' + this.name;
    }
}
const amy ={
    name = 'amy',
    say = function() {
    return 'saying' + this.name;
}
const jane={
    name = 'jane',
    say = function() {
    return 'saying' + this.name;
}