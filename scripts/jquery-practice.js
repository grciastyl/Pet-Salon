console.log("Welcome to jQuery")

//JS vs jQuery getting Element
// by id
let htmlElement = document.getElementById("red");//js
htmlElement = $("#red");//jquery
console.log(htmlElement);

//by class
let htmlElement2 = document.getElementsByClassName("tomato-bg");//js
htmlElement2 = $(".tomato-bg");//jquery
console.log(htmlElement2);

//by tag name

let htmlElement3 = document.getElementsByTagName("p");
htmlElement3=$("p");
console.log(htmlElement3);

//ID selector
$("#red").css("background-color","red").css("color","white");
$("#blue").css("background-color","blue").css("color","orange");

//class selector
let paragraphWithBorder= $(".with-border");
paragraphWithBorder.css("border","3px solid black");

paragraphWithBorder.on("click",function(){
    console.log("clicked");
//change bg to gray
//paragraphWithBorder.css("background-color","gray");
$(this).addClass("bg-gray")
})

// tag selector
$("p").css("cursor","pointer");
//$("p").hide();

//simple and common function

function register(){
    let testEntry = $("#testInput").val(); //get and store the value
    $("results").append(`<li>${testEntry} </li>`);

    //console.log("register");

}

//hook event
$("#btnRegister").on("click",register);


//another simple and common function

function clickMe(){
    console.log("clicked me");  //displays on the console click me
    $("#red").hide();    //hide the first paragraph (red)
    $("p:last").css("border","3px solid black")
}
    $("#btnClick").on("click",clickMe);

