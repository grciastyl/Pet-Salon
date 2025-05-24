function displayRow(){
    let div=document.getElementById("petList");
    let result=""
    // let card="";
for(let i=0;i<pets.length;i++){
    result+=`
    
    
            <tr>
                <td>${pets[i].name}</td>
                <td>${pets[i].age}</td>
                <td>${pets[i].gender}</td>
                <td>${pets[i].breed}</td>
                <td>${pets[i].service}</td>
                <td>${pets[i].type}</td>
                <td button type="button" class="btn btn-danger">Delete</td button>
            </tr>
    `;
}

//<h5>${pets[i].name}</h5>
//<h6 class="card-subtitle mb-2 text-body-secondary">${pets[i].breed}</h6>
//<p class="card-text">${pets[i].age}</p>
//<p class="card-text">${pets[i].gender}</p>
//<button type="button" class="btn btn-danger">Delete</button>
//</div>
//we can create HTML structure within js, make sure to use ``

div.innerHTML= result;
//do not forget to use an id that exists on the HTML

}


function displayInfo(){
    document.getElementById("info").innerHTML=`<p>Total number of pets: ${pets.length}</p>`
}