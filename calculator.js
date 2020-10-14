/**
 * Created by vaio on 21.02.2019.
 */
window.onload=function () {
    $("#form").hide();
    $(".button").on("click", function () {
       $("#form").show(2500);
       $("#form")[0].reset();//clearing the form information
       $("input").show(3000);
       $("#otv").hide(5000);
    });
//////////////////////////////////////////////////////////////////////////////////////////
    $("#plus").on("click", function () {
        $("#otv").show(2000);
        $("input").hide(5000);
        $(function () {
            var num1 = parseInt($("#num1").val());
            var num2 = parseInt($("#num2").val());
            var sum = (num1+num2);
            $(".answer").html("Answer: "+num1+" + "+num2+" = "+sum);
        })
    });
    $("#minus").on("click", function () {
        $("#otv").show(2000);
        $("input").hide(5000);
        $(function () {
            var num1 = parseInt($("#num1").val());
            var num2 = parseInt($("#num2").val());
            var sum = (num1-num2);
            $(".answer").html("Answer: "+num1+" - "+num2+" = "+sum);
        })
    });
    $("#mult").on("click", function () {
        $("#otv").show(2000);
        $("input").hide(5000);
        $(function () {
            var num1 = parseInt($("#num1").val());
            var num2 = parseInt($("#num2").val());
            var sum = (num1*num2);
            $(".answer").html("Answer: "+num1+" * "+num2+" = "+sum);
        })
    });
    $("#division").on("click", function () {
        $("#otv").show(2000);
        $("input").hide(5000);
        $(function () {
            var num1 = parseInt($("#num1").val());
            var num2 = parseInt($("#num2").val());
            var sum = (num1/num2);
            $(".answer").html("Answer: "+num1+" / "+num2+" = "+sum);
        })
    });
    $("#power").on("click", function () {
        $("#otv").show(2000);
        $("input").hide(5000);
        $(function () {
            var num1 = parseInt($("#num1").val());
            var num2 = parseInt($("#num2").val());
            var sum = Math.pow(num1, num2);
            $(".answer").html("Answer: "+num1+" ^ "+num2+" = "+sum);
        })
    });
};