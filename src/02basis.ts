// type为number 的变量a 
let a: number 

let b: String = 'b'

let c: boolean = true
// 简写 let c = true

// 函数形参，返回值
function fuc(a: number, b: number): number {
    return a + b
}

let sum = fuc(123, 234)


// 字面量赋值， | 链接多个类型 （联合类型）
let a1: 'male' | 'female'

// any 类型 : 任意类型, 可以赋值给任意类型，不报错
let a2: any

// unknown : 未知类型, 
// （其实就是个类型安全的any，不可赋值给其他类型）
let a3: unknown
a3 = '1111'
// 如果想把unknown赋值给其他类型，需要先判断，如
// b = a3 // 报错
if (typeof a3 === 'string') {
    b = a3
} // 不报错

// 类型断言，告诉编译器，变量的实际类型
b = a3 as string  // 方法一 变量 as 类型
b = <string> a3 // 方法二 <类型>变量

// void 没有值(空值)，如函数返回值，没有返回值的时候
function fun1 (): void {
    return
}

// never没有值
function fun2 (): never {
    throw new Error()
}

// 对象
// 不常用，因为js中万物皆对象
let a4 :object

// {} 声明，指定对象中包含哪些属性
let a5: {}
a5 = {name: '99'}

// 对象必须包含name,age
let a6: {name: string, age: number}
a6 = {name: '11', age: 5}

// 对象必须包含name,  而age可选
let _a6: {name: string, age?:number}
_a6 = {name: '1'}

// 对象必须包含name, 其他属性可有可无，类型随意
let a7: {name: string, [propertyName: string] :any}

// 函数
// 函数结构声明： （形参：类型，形参：类型......） =》返回的类型 
let b2: (a: number, b: number) => number

// 数组
// 1、类型[]
// 2、Array<类型>
let c1: number[]
c1 = [1, 2, ]

let c2: Array<string>
c2 = ['1', '2', ]

// 元组，就是固定长度的数组
// 语法：[类型， 类型...]
let d1: [string, string]
d1 = ['1', '2']

// 枚举 enum
// 多个值之间进行选择
enum gender {
    male = 0,
    famale = 1
}

let d1_1: {name: string, gender: gender}
d1_1 = {
    name: '小小',
    gender: gender.male
}

// &
let f1: {name: string} & {age: number}
f1 = {name: '1', age: 3}

// 类型别名
//  type: 类型
type myType = 1|2|3|4|5
let e1: myType
e1 = 3

// 抽象类
// abstract 抽象类   只能被继承
// 抽象方法，以abstract开头，没有函数体，必须定义在抽象类中，且子方法必须将其重写

// 接口(类实现，泛型实现)
// 跟type 一样， 
// 不同是，1、接口可以重复声明，最终值为各个声明相加 
// 2、接口中类型不能有实际的值，接口中所有方法都是抽象方法
// 3、定义类时，可以实现一个接口， eg:    class Person implements 接口名称
interface myInterface {
    name: string,
    age: number
}

interface myInterface {
    sex: string
}

class Person4 implements myInterface {
    name: string
    age: number
    sex: string
}


// 属性的封装
// public
// private 私有属性，只能在类中访问（修改）,子类中不可以访问
// protected 受保护的属性，只能在当前类，和当前子类中访问
// 简写
class Person02 {
    private name: string
    private age: number

    constructor (name: string, age: number) {
        this.name = name
        this.age = age
    }

    getName () {
        return this.name
    }

    setName (name: string) {
        this.name = name
    }
}

const p2 = new Person02('小小', 25)
console.log(p2.getName())
p2.setName('dada22')
console.log(p2.getName());


class Person03 {
    private name: string
    private age: number

    constructor (name: string, age: number) {
        this.name = name
        this.age = age
    }

    // getName () {
    //     return this.name
    // }

    // setName (name: string) {
    //     this.name = name
    // }

    get _name () {
       return this.name
    }

    set _name (value: string) {
        this.name = value
    }
}

const p3 = new Person03('孙悟空', 25)

p3._name = '猪八戒'

p3._name

console.log(p3._name)

// 简写
class C2 {
    name: string
    age: number
    constructor(name: string, age: number ) {
        this.name = name
        this.age = age
    }
}
// 上下等价
class C {
    constructor(public name: string, public age: number) {

    }
}


// 泛型
// 定义泛型，传入的值为k,返回的值为k,  根据传入的值，动态确定返回的值
function aFunc<k> (a: k): k {
    return a
}
// 使用
// 1、指定泛型，不指定泛型
aFunc(10) // 不指定泛型，ts自动推断，但并不是所有情况都能推断
aFunc<string>('name') // 指定泛型，
// 2、多个泛型
function bFunc<K, L> (name: K, age: L): K {
    return name
}
bFunc<string, number>('name', 12)
// 3、泛型，需要是interface的实现类
interface myInterface2 {
    length: number
}
function cFuc<K extends myInterface2>(arg1: K) {
    return arg1.length
}
cFuc('JJJ')
// 4、类中使用泛型
class Myclass<T> {
    name: T
    constructor(name: T) {
        this.name = name
    }
}
let myclass = new Myclass('悟空')

