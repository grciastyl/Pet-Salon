console.log("Services");

//constructor (description,price)
function Service(title,price){
    this.title=title;
    this.price=price;
}
//register
function register(){
    let inputTitle = $("#txtTitle").val();//get the title
    let inputPrice = $("#txtPrice").val();//get the price

    //create a newService object
    let newService = new Service(inputTitle,inputPrice);
    if(isValid(newService)){
        save(newService);
        window.location="register.html";
    }
}
    //validation

function isValid(Service){
    let isValidTitle=true;
    let isValidPrice=true;

    if(Service.title == ""){
        isValidTitle=false;
        $("#titleRequirementText").css("color","red").show();
    }else{
        $("#titleRequirementText").hide();
    }

    if(Service.price == ""){
        isValidPrice=false;
        $("#priceRequirementText").css("color","red").show();
    }else{
        $("#priceRequirementText").hide();
    }

    //&& is the same as AND
    return isValidTitle && isValidPrice;
}

    //init() this is everything that starts up with the window
    function init(){

        //hook events
        $("#btnRegister").on("click",register);

        //initial state of the system

        $("#titleRequirementText").hide();
        $("#priceRequirementText").hide();
    }

window.onload=init;