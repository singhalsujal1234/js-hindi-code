//objects ----literals and constructor

//constructor :object.create
const mySymbol =  Symbol()

//literals ----
const jsuser={
name:"sujal singhal" ,
class :"7B",
email:"sujalsinghal123@google.com",
age :20,
[mySymbol]:"mykey1",
isloggedin:false,
lastloginindays :["monday","tuesday"]
}
// console.log(jsuser.email);
// console.log(jsuser["email"]);

//symbol---------
// const mySymbol =Symbol("key1")
// console.log(typeof jsuser[mySymbol]);
// console.log( jsuser[mySymbol]);


// change the value -----
 jsuser.age =21          
//  console.log(jsuser["age"]);

//  freeze--------the value -
// Object.freeze(jsuser)
jsuser.age=20
// console.log(jsuser.age=20)
// console.log(jsuser.age=20);
// console.log(jsuser);

 
// jsuser.greeting = function(){
//     console.log("hello");
       
// }
// console.log(jsuser.greeting);
// console.log(jsuser.greeting());


jsuser.greetingtwo = function(){
    console.log(`hello  ${this.name}`);
       
}
console.log(jsuser.greetingtwo);//fuction ananymous
console.log(jsuser.greetingtwo());








