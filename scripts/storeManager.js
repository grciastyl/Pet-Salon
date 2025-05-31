function save(service){
console.log(service);//display object on console

let val = JSON.stringify(service); //JSON conversion to a string

console.log(val);// display the stringified conversion on the console

localStorage.setItem("services",val);


}

function readServices(){



}