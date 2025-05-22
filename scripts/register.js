let pets=[];


let inputName = document.getElementById("txtName");
let inputAge = document.getElementById("txtAge");
let inputGender = document.getElementById("txtGender");
let inputBreed = document.getElementById("txtBreed");
let inputService = document.getElementById("txtService");
let inputType = document.getElementById("txtType");

//creating the obj constructor
function Pet(name,age,gender,breed,service,type){
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.breed=breed;
    this.service=service;
    this.type=type;
}

function register(){
    let newPet = new Pet(inputName.value,inputAge.value,inputGender.value,inputBreed.value,inputService.value,inputType.value)
    pets.push(newPet);
    console.log(newPet);
    alert("The registration was successful!!!");
    displayInfo();
    clearForm();

}
function displayInfo(){
    document.getElementById("info").innerHTML=`<p>Total number of pets: ${pets.length}</p>`
}

function clearForm(){
    document.getElementById("txtName").value="";
    document.getElementById("txtAge").value="";
    document.getElementById("txtGender").value="";
    document.getElementById("txtBreed").value="";
    document.getElementById("txtService").value="";
    document.getElementById("txtType").value="";

}


function init( ){
    //create objs
    let pet1 = new Pet("Scooby",99,"Male", "Dane");
    let pet2 = new Pet("Scrappy",99, "Male", "Mixed")
    let pet3 = new Pet("Tweety Bird",99, "Male", "Canarian")
    pets.push(pet1,pet2,pet3);
    console.log(pets);
}
displayInfo();

window.onload=init;  //render the HTML