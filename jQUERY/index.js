$(document).ready(function(){
    console.log('ready');

    $("#btn1").click(function(){
      $("#box")
      .animate({height: "500px"})
      .delay(500)
      .animate({height: "0px"});

    });
});


$(document).ready(function(){
    $(".button1")
    .click(function(){
        $("#p1")
        .css("color", "red")
        .slideUp(2000)
        .slideDown(2000);
    });
});


$(document).ready(function(){
    $(".button2").click(function(){
        $(".parag").toggle("slow", function(){
        console.log("The paragraph is now hidden");
        });
    });
});