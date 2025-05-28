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
    if(isValid(newPet)){
    pets.push(newPet);
    displayInfo();
    clearForm();
    displayRow();
    }else{
        alert("Please fill out all fields!");
    }
}

function isValid(aPet){
    let validation = true; //everything is good

    if(aPet.name ===""){
        validation=false;//something is wrong
    }
    if(aPet.gender ===""){
        validation=false;
    }
    return validation;
}
    
function deletePet(petIndex){
    console.log("Delete Pet" +petIndex)
    document.getElementById(petIndex).remove();
    pets.splice(petIndex, 1);
    displayRow();
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
    let pet1 = new Pet("Scooby",9,"Male", "Dane","Yes","Trim");
    let pet2 = new Pet("Scrappy",6, "Female", "Mixed","Yes","Groom")
    let pet3 = new Pet("Tweety Bird",12, "Male", "Canarian","Yes","Coloring")
    pets.push(pet1,pet2,pet3);
    console.log(pets);
}


window.onload=init;  //render the HTML