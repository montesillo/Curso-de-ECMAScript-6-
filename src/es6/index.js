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