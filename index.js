// document.querySelector("h1").css("color","red");
// jQuery("h1").css("color","red");
// $("h1").css("color","red");
$("h1").addClass("big-title margin-50");

$("h1").text("Bye");
$("button").html("<em>Don't click me</em>")

console.log($("img").attr("src"));

// $("a").attr("href","https://www.yahoo.com");

$("h1").click(function(){
    $("h1").css("color","purple");
});


// for(var i=0;i<document.querySelectorAll("button").length;i++){
//     document.querySelectorAll("button")[i].addEventListener("click",function(){
//         document.querySelector("h1").style.color="purple";
//     });    
// }

$("button").click(function(){
    $("h1").css("color","purple");
});


$("input").keypress(function(event){
    console.log(event.key);
});

$(document).keypress(function(event){
    $("h1").text(event.key);
});


$("h1").on("mouseover",function(){
    $("h1").css("color","purple");
});


// $("h1").before("<button>New</button>");
// $("h1").after("<button>New</button>");
// $("h1").prepend("<button>New</button>");
// $("h1").append("<button>New</button>");

// $("button").remove();

// show(),hide(),toggle(), fadeOut(),fadeIn(),fadeToggle(),slideUp(),slideDown(),slideToggle()
// $("button").click(function(){
//     $("h1").fadeToggle();
// });


$("button").on("click",function(){
    $("h1").animate({opacity:0.5});
});