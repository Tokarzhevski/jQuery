/**
 * Created by vaio on 27.02.2019.
 */
$(function () {

    $("#send").on("click", function () {
        var text = $("#text").val();
        $("#anim").animate({fontSize: "+=50px", left: "500px", top: "150px"}, 5000);
        $("#anim").html(text);
    });




});