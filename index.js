/*Normal format
alert("Hello");
console.log("New concept");
*/
/*var name="kanika";
const dob="13-04-2007";
let msg="Hello " + name +",How are you? I was born on" + dob;
//best practice use of let->var

//data-types
let f_name="kanika";
let age=18;
let option=true;
let l_name=undefined;
alert(name);
console.log(msg);

//objects
let person={name:"kanika",
    age:17,
    gender:"female",
    siblings:{brother:"Ram",sister:"keerth"}};
console.log(person)
console.log(person.age) //dot notation of objects
console.log(person.siblings.sister)
console.log(person['name'])  //bracket notation of objects

//arrays
let fav_color=["blue","black","yellow"];
fav_color[2]="green"; //replacing
fav_color[3]="yellow"; //adding element
console.log(fav_color)
console.log(fav_color[1])

//functions
function add(num1,num2){
    num3=num1+num2;
    let sum=num1+" + "+num2+" = "+ num3;
    console.log(sum)
}
add(5,6)

//ternary operator
let n_age=21;
let vote=n_age>18? "eligible to vote":"not eligible to vote"
console.log(vote)

let display=new Date();
console.log(display)
console.log(display.getMinutes())*/

//OOP's
/*let person={
    name:"Kanika",
    age:18,
    hobbies:["playing","reading","writing"],
    greet:function(){
        let msg="Hello,My name is "+this.name+". I am "+this.age+" years old.";
        console.log(msg)
    }
};
//arrays
person.greet()
var arr1=[["kani",17],["Bharathi",46]];
console.log(arr1)
arr1.push(["Anand",49]);
console.log(arr1);*/

//array->reduce method
/*let num=[3,4,7,9,2];
let result=num.reduce(function(preVal,curVal){
    return preVal+curVal;
},0);
console.log(result);*/
//fucntion->arguments
/*function add(n1,n2,n3){
    return n1+n2+n3;
}
let result=add(12,34,56,10); // considers only 3 elements
console.log(`total cost:${result}`);*/
/*function add(){
    let total=0;
    for(let values of arguments){
        total+=values;}
        return total;
}
let result=add(12,34,56,10); // considers all elements
console.log(`total cost:${result}`);*/
let student={
    f_name:"kanika",
    l_name:"Anand",
    fullname:function(){
        return `${student.f_name} ${student.l_name}`;
    },
};
console.log(student.fullname());
