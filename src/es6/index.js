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