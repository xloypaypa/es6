var add = function (a, b) {
    return a.name + " + " + b.name + " = " + (a.value + b.value) + ".";
}

var name = "one";
var value = 1;
var a = {name: name, value: value};
var b = {name: name, value: value};

console.log(add(a, b)); //don't change this line :)