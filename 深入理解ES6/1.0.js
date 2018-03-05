/**
 * 块级作用域的绑定
 */
function getValue(condition) {
    if (condition) {
        var value = "blue";
        //其他代码
        return value;
    } else {
        return null;
    }
}
//声明提升的变形如下
function getValue2(condition) {
    var value;
    if (condition) {
        value = "blue";
        return value;
    } else {
        return null;
    }
}

/**
 * 块级声明
 */
function getValue3(condition) {
    if (condition) {
        let value = "blue";
        return value;
    } else {
        return null;
    }
}