// @ts-nocheck


$(document).ready(function () {


    $(".barbutton").click(function () {
        $(".toreturn").toggleClass("routate")
    });



    $(".All-bar").click(function () {
        $(".allitems").fadeIn("slow")
    });

   

    $(".baskteball-bar").click(function () {
        $(".allitems").fadeOut("slow"),
        $(".basket").fadeIn("slow")
    });


    $(".Football-bar").click(function () {
        $(".allitems").fadeOut("slow"),
        $(".football").fadeIn("slow")
    });


    $(".sportsthings-bar").click(function () {
        $(".allitems").fadeOut("slow"),
        $(".sportsthings").fadeIn("slow")
    });


    $(".tennis-bar").click(function () {
        $(".allitems").fadeOut("slow"),
        $(".tennis").fadeIn("slow")
    });





})
