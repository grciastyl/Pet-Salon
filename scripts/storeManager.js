function save(service){
    //get the existing data
    let currentData = readServices(); //either [] or data
    //push the new service to the array
    currentData.push(service);

    let val = JSON.stringify(currentData); //JSON conversion to a string


    //save the string to the LS
    localStorage.setItem("services",val);


}

function readServices(){

    //get the data from the local storage
    let storedData = localStorage.getItem("services");
    //if nothing is found
    if (storedData==null){
        return []; //empty array
    }else{
    return servicesArray = JSON.parse(storedData);
    }
}