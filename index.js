/*Normal format
alert("Hello");
console.log("New concept");
*/
var name="kanika";
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
console.log(display.getMinutes())