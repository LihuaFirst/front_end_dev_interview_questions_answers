

// 2. If apply, call, or bind are used to call a function, this inside the function is the object that is passed in as the argument.
/*function fn() {
    console.log(this);
}
var obj = {
    value: 5
};
var boundFn = fn.bind(obj);
boundFn();     // -> { value: 5 }
fn.call(obj);  // -> { value: 5 }
fn.apply(obj); // -> { value: 5 }*/

// 1. If the new keyword is used when calling the function, this inside the function is a brand new object.
/*function ConstructorExample() {
    console.log(this);
    this.value = 10;
    console.log(this);
}
new ConstructorExample();*/