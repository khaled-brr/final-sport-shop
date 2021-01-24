// @ts-nocheck

$(document).ready(function () {

    $(".fa-eye-slash").click(function () {
        $(this).css("display", "none");
        $(".fa-eye").css("display", "block");
        $(".password-input").attr("type", "text");
    });

    $(".fa-eye").click(function () {
        $(this).css("display", "none");
        $(".fa-eye-slash").css("display", "block");
        $(".password-input").attr("type", "password");
    });
})

