/* 语法
*@  5.1 语句和表达式
*/
 var b;
 if(true){
 	b = 4 +38;
 }

  var a,b;
 a = if(true){
     b = 4 + 38;
 };

 //do表达式
 var a ,b;
 a = do{
 	if(true){
 		b = 4 + 38;
 	}
 };
 a;//42

 //表达式副作用
 var a = 2;
 var b = a+3;

 function foo(){
 	a = a + 1;
 }
 var a = 1;
 foo();

 var a = 42;
 var b = a++;
 a;
 b;

 var a = 42;
 a++;
 a;
 ++a;
 a;//44

var a = 42;
a++;
a;//43
++a;
a;//44

var a = 42;
var b = (a++);
a;//43
b;//42





