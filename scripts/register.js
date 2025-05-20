console.log("register");
// list of pets
let pet1 = {
    name:"Aspen",
    age:"5",
    gender:"f",
    service:"bath",
    breed:"malinois",
}
let pet2 = {
    name:"Mittens",
    age:"9",
    gender:"f",
    service:"nails",
    breed:"cat",
}
let pet3 = {
    name:"Bella",
    age:"13",
    gender:"f",
    service:"groom",
    breed:"chihuahua",
}

//getting total amount of pets and displaying on HTML
let petsList=[];
petsList.push(pet1,pet2,pet3);
document.getElementById("totalpets").innerHTML="Total Pets:"+petsList.length;

//function to list pets names
function getPetNames(){
    let list = document.getElementById("petsList")//defining variable (list) and referencing html
    for(let i=0;i<petsList.length;i++){//for loop parameters
        console.log(`pets names: ${petsList[i].name}`);//displaying pets names on console
        list.innerHTML+=`<li>${petsList[i].name}</li>`;//displaying pets names on html at "petsList"
    }
}

getPetNames()//recalling function to run


