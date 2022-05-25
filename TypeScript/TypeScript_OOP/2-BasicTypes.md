#### The Basics
https://www.typescriptlang.org/docs/handbook/2/everyday-types.html

> The primitives: string, number, and boolean
 (primitive values are undefined , null , booleans, numbers, bigints, strings)
 
```js
{
// number
const num: number = -6;

// string
const str: string = "hello";

// boolean
const bool: boolean = false;

// undefined - declared but not defined yet
let name: undefined; // 💩
let age: number | undefined; // 👌 union type
age = undefined;
age =1;
function find(): number | undefined { // it returns either number or nothing
return ...
}

// null - assigned value, explicitly empty
let person: null; // 💩
let person2: string | null;

// unknown 💩
let notSure: unknown = 0;
notSure ="he";
notSure = true;

// any 💩
let anything: any = 0;
anything = "hello";

// void - returns nothing 생략가능 
function print(): void{
console.log("hello");
}
let unusable: void = undefined; // 💩 never seen this one

// never -determined not to return anything,indicates the values that will never occur.
function throwError(message: string):never {

// case 1 message => server ( to log)
throw new Error(message);

// case 2
while(true){
 }
}

// object - type of all non-primitive values 
let obj: object; // 💩
function acceptObject(obj: object){}
acceptObject({name:"chuchu"}0;

}

```
