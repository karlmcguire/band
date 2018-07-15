$(function() {
    $(document).on("scroll", function() {
        if ($(document).scrollTop() != 0) {
            $("#head").removeClass("head--top").addClass("head--down"); 
        } else {
            $("#head").removeClass("head--down").addClass("head--top"); 
        }
    });

    $("#arro").on("click", function() {
        alert("click!");
    });
});
