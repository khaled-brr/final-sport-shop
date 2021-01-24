//loading page
window.onload = function () {
    $(".overlayloading .spinner").fadeOut(2000, function () {
        $(this).parent().fadeOut(1500, function () {
            $(this).remove()
        })
    });
}
