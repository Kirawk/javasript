/*****箭头函数****/
/**
 * 箭头函数语法
 */

//一个参数
let value = value => value;
let value = function(value) {
    return value;
};

//两个参数
let sum = (num1, num2) => num1 + num2;
let sum = function(num1, num2) {
    return num1 + num2;
};

//没参数
let getName = () => "Nicholas";
let getName = function() {
    return "Nicholas";
};

//多个参数与多个表达式
let a = (x, y) => {
    if (x > y) {
        return x;
    } else {
        return y;
    }
};
let a = function(x, y) {
    if (x > y) {
        return x;
    } else {
        return y;
    }
};

//创建一个空函数
let doNothing = () => {};
let doNothing = function() {};

//创建一个对象字面量
let getTempItem = id = ({ id: id, name: "Temp" });
//实际上相当于
let getTempItem = function() {
    return {
        id: id,
        name: "Temp"
    };
};

/**
 * 创建立即执行函数
 */

let person = function(name) {
    return {
        getName: function() {
            return name;
        }
    };
}("Nicholas");
console.log(person.getName());

let person = ((name) => {
    return {
        getName: function() {
            return name;
        }
    };
})("Nicholas");

/**
 * 箭头函数没有this绑定
 */
let PageHandler = {
    id: "123",
    init: function() {
        document.addEventListener("clicl", function(event) {
            this.doSomething(event.type); //抛出错误    
        }, false);
    },
    doSomething: function(type) {
        console.log("Handling" + type + "for" + this.id);
    }
};

let PageHandler = {
    id: "123",
    init: function() {
        document.addEventListener("clicl", (function(event) {
            this.doSomething(event.type); //抛出错误    
        }).bind(this), false);
    },
    doSomething: function(type) {
        console.log("Handling" + type + "for" + this.id);
    }
};

let PageHandler = {
    id: "123",
    init: function() {
        document.addEventListener("click",
            event => this.doSomething(event.type), false);
    },
    doSomething: function(type) {
        console.log("Handling" + type + "for" + this.id);
    }
};

/**
 * 箭头函数与数组
 */
var result = values.sort(function(a, b) {
    return a - b;
});

var result = values.sort((a, b) => a - b);

/**
 * 箭头函数没有arguments绑定
 */
function createArrowFunctionReturningFirstArg() {
    return () => arguments[0];
}
var arrowFunction = createArrowFunctionReturningFirstArg(5);
console.log(arrowFunction()); //5

/**
 * 箭头函数的辨识方法
 */
var comparator = (a, b) => a - b;
console.log(typeof comparator); //"Function"
console.log(comparator instanceof Function); //true

var sum = (num1, num2) => num1 + num2;
console.log(sum.call(null, 1, 2)); //3
console.log(sum.apply(null, [1, 2]));
var boundSum = sum.bind(null, 1, 2);
console.log(boundSum());

/**
 * 带参数的默认值函数
 */
function makeRequest(url, timeout, callback) {
    timeout = timeout || 2000;
    callback = callback || function() {};

    //函数剩余部分
}

function makeRequest(url, timeout, callback) {
    timeout = (typeof timeout != "undefined") ? timeout : 2000;
    callback = (typeof callback != "undefined") ? callbak : function() {};
    //函数剩余部分
}