"use strict";

var person = {
    name: 'felix',
    sayHello: function() {
        return 'Hello '+ this.name;
    }
};

console.log(person.name);
person.name = 'Spear chuckah';
console.log(person.sayHello());
