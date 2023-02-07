// type为number 的变量a 
var a;
var b = 'b';
var c = true;
// 简写 let c = true
// 函数形参，返回值
function fuc(a, b) {
    return a + b;
}
var sum = fuc(123, 234);
// 字面量赋值， | 链接多个类型 （联合类型）
var a1;
// any 类型 : 任意类型, 可以赋值给任意类型，不报错
var a2;
// unknown : 未知类型, 
// （其实就是个类型安全的any，不可赋值给其他类型）
var a3;
a3 = '1111';
// 如果想把unknown赋值给其他类型，需要先判断，如
// b = a3 // 报错
if (typeof a3 === 'string') {
    b = a3;
} // 不报错
// 类型断言，告诉编译器，变量的实际类型
b = a3; // 方法一 变量 as 类型
b = a3; // 方法二 <类型>变量
// void 没有值(空值)，如函数返回值，没有返回值的时候
function fun1() {
    return;
}
// never没有值
function fun2() {
    throw new Error();
}
// 对象
// 不常用，因为js中万物皆对象
var a4;
// {} 声明，指定对象中包含哪些属性
var a5;
a5 = { name: '99' };
// 对象必须包含name,age
var a6;
a6 = { name: '11', age: 5 };
// 对象必须包含name,  而age可选
var _a6;
_a6 = { name: '1' };
// 对象必须包含name, 其他属性可有可无，类型随意
var a7;
// 函数
// 函数结构声明： （形参：类型，形参：类型......） =》返回的类型 
var b2;
// 数组
// 1、类型[]
// 2、Array<类型>
var c1;
c1 = [1, 2,];
var c2;
c2 = ['1', '2',];
// 元组，就是固定长度的数组
// 语法：[类型， 类型...]
var d1;
d1 = ['1', '2'];
// 枚举 enum
// 多个值之间进行选择
var gender;
(function (gender) {
    gender[gender["male"] = 0] = "male";
    gender[gender["famale"] = 1] = "famale";
})(gender || (gender = {}));
var d1_1;
d1_1 = {
    name: '小小',
    gender: gender.male
};
// &
var f1;
f1 = { name: '1', age: 3 };
var e1;
e1 = 3;
