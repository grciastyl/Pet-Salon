console.log("Welcome to session 1");


// -----ARRAYS[]----has square brackets
let fruits = ["apple", "banana", "orange"];
console.log(`This is an array: ${fruits}`);
console.table(fruits);
// pulls up individual items
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
//changing fruit 1 to cherry
fruits[1] = "Cherry";
console.table(fruits);


//array length
console.log(fruits.length);

// add and remove items
fruits.push("watermelon");// adds item to the end of the array
console.log(fruits);

fruits.pop();//removes item from the end
fruits.pop();
console.log();

fruits.unshift("grapes");//adds item to the beginning of the array
console.log(fruits);

fruits.shift(fruits);//removes item from the beginning
console.log(fruits);


//challenge 1
//create an array of students names
//use a for loop to iterate through the array
//log each student name

let students = ["chris","brad", "alexis", "ryan", "michel", "wilbert"];
for(let i=0;i<students.length;i++){//in case list of students change
    console.log(students[i]);

}

//----OBJECTS{}------has curly braces
// an obj is a collection if key pair values
//we can have the data together in a structured way

//object literal
let person = {
    name:"Mike",
    lastName:"Scott",
    age:40,
    isStudent:false
}

//Accessing the properties in an obj
console.log(`The persons name is ${person.name}`);
console.log(`The persons age is ${person[`age`]}`);
console.log(person.lastName);
console.log(person.isStudent);

let student1 = {
    name:"Leopoldo",
    age:99,
    email:"leo@sdgku.edu",
    address:"742 evergreen terrace springfield, USA"

}
console.log(student1);

//Mini
//  challenge create another 3 students

let student2 = {
    name:"John",
    age:45,
    email:"john@sdgku.edu",
    address:"123 any street johnsville, USA"
}
let student3 = {
    name:"Kevin",
    age:54,
    email:"kevin@sdgku.edu",
    address:"456 other ave kevinsville, USA"
}
let student4 = {
    name:"Matt",
    age:35,
    email:"matt@sdgku.edu",
    address:"890 not lane mattston, USA"
}

let studentsList =[];
studentsList.push(student1,student2,student3,student4);

console.log("students List: " +studentsList.length);

//display on the HTML the total number of students
// create a <p> with id on the HTML
//use the document.getElementById()

document.getElementById("studentCounter").innerHTML="student List: " +studentsList.length;

console.log(`email: ${studentsList[0].email}, address: ${studentsList[0].address}`);

//challenge: display the students names on the console... use the array

function getStudentNames(){
    let list = document.getElementById("list")
    for(let i=0;i<studentsList.length;i++){
        console.log(`students names: ${studentsList[i].name}`);
        list.innerHTML+=`<li>${studentsList[i].name}</li>`;
    }
}

getStudentNames()