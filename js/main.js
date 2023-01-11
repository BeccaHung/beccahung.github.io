$(document).on("click", ".material-symbols-rounded", function () {
  $(this).parents(".contact").html("");
});
$(".count-btn").click(function () {
  var btnType = $(this).attr("data");
  var inputVal = $("#addResult").val();
  if (btnType == "add") {
    $("#addResult").val(parseInt(inputVal) + 1);
  } else if (btnType == "minus" && inputVal > 1) {
    $("#addResult").val(parseInt(inputVal) - 1);
  }
});

$(document).ready(function () {
  $(".btn-1").click(function () {
    $("#cartToggle").fadeIn();
    $("#cartToggle").fadeIn("slow");
    $("#cartToggle").fadeIn(3000);
  });
});
$(document).ready(function () {
  $(".cart-btn").click(function () {
    $("#cartToggle").fadeIn();
    $("#cartToggle").fadeIn("slow");
    $("#cartToggle").fadeIn(3000);
  });
});

$(document).ready(function () {
  $(".clean-all-btn").click(function () {
    $("#cart-con").remove();
    $("#cleaner").show();
  });
});

$(document).ready(function () {
  $(".close-btn").click(function () {
    $("#cartToggle").hide();
  });
});
$(".ok-buy-btn").click(function () {
  $("#cartToggle").hide();
  alert("已加入購物車");
  $("#cartToggle").hide();
});

$(document).ready(function () {
  $(".buy-btn").click(function () {
    $("#cartToggle").fadeOut();
    $("#cartToggle").fadeOut("slow");
    $("#cartToggle").fadeOut(3000);
  });
});
