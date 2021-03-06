function newFunction(name, age, country){
    var name = name || 'hiram';
    var age = age || 29;
    var country = country || "MX";
    console.log(name, age, country);
}

function newFunction2(name = 'Hiram', age = 29, country = "MX"){
    console.log(name, age, country);
}

newFunction2();
newFunction2('Ricardo', 32, 'CO');

let hello = "Hello";
let world = "World";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

let person = {
    'name': 'hiram',
    'age': 32,
    'country': 'MX'
}

console.log(person.name, person.age)

let {name, country} = person;

console.log(name, country)

let team1 = ['Hiram', 'Ale', 'Richy'];
let team2 = ['Zoila', 'Yeri'];

let family = ['Martin', ...team1, ...team2];
console.log(family);

//Manejo de objetos más amigable

let name = 'hiram';
let age = 29;

//es5
obj = { name: name, age: age}

//es6

obj2 = { name: name, age: age}

console.log(obj2)

const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if(!true){
            resolve('hey!!')
        }else{
            reject('Ups!!')
        }
    });
}

helloPromise()
    .then(response => console.log(response))
    .catch(error => console.log(error));

//clases
class calculator {
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }

    //Herencia
    sum(valueA, valueB){
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new calculator();
console.log(calc.sum(2, 2));

//modulos
import { hello } from './module';

hello();

//Generadores
function* helloWorld(){
    if(true){
        yield 'hello'
    }
    if(true){
        yield 'world'
    }
};

const generatorHello = helloWorld();

console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);


//includes
let numbers = [1, 2, 3, 4, 7, 8];

if(numbers.includes(7)){
    console.log('Si tiene el 7');
}else{
    console.log('No tiene el 7');
}

//potencias 

let base = 4;
let exponent = 3;
let result = base ** exponent;

console.log(result)