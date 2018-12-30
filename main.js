

$("#youssef").click(function () {
    console.log($("#test").css("color"));
    if($("#test").css("color") == "rgb(0, 0, 255)") { 
        $("#test").css("color", "#000000");
        $("#test").css("font-size", "1em");
       
    }
    else {
        $("#test").css("color","#0000FF" );
        $("#test").css("font-size", "5em");
    }
})

$("#hello").click(function () {

    if ($("#test3").css("font-style") == "italic") {
        $("#test3").css("font-style", "normal")
    
    }
    else {
        $("#test3").css("font-style", "italic")
      
    }
}
);

$("#bold").click(function () {

    if ($("#test2").css("font-weight") == 400) {
        $("#test2").css("font-weight", 800);
    }
    else {
        $("#test2").css("font-weight", 400);
    }

});

$("#underline").click(function () {
    console.log($("#test4").css("text-decoration"));    
    if ($("#test4").css("text-decoration") == "underline solid rgb(0, 0, 0)") {
        
        $("#test4").css("font-size", "1em")
        $("#test4").css("text-decoration", "none")
    }
    else {
        $("#test4").css("text-decoration", "underline")
        $("#test4").css("font-size", "5em")
    };
});


$("#id1").on('change', function() {
    $("#hello1").css("font-family" , this.value)
  });
  $("#idd").on('change', function() {
    $("#hello1").css("font-size" , this.value)
  });