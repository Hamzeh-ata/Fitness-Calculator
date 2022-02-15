var age,
  highet,
  weight,
  waist,
  neck,
  gender,
  fector1,
  fector2,
  leanBodyMass,
  BodyFatWeight,
  BodyFatPrecentage;
BodyFatPrecentage = 0;
$("#submit-form").click(function () {
  age = $("#Age").val();
  highet = $("#Higeht").val();
  weight = $("#Weight").val();
  waist = $("#Waist").val();
  neck = $("#Neck").val();
  if (
    $("#formSec input[type='radio']:checked").val() == 1 && !($("#Age").val().length === 0) && !($("#Higeht").val().length === 0) && !($("#Weight").val().length === 0)&& !($("#Waist").val().length === 0)&& !($("#Neck").val().length === 0)
  ) {
    fector1 = weight * 1.082 + 94.42;
    fector2 = waist * 4.15;
    leanBodyMass = fector1 - fector2;
    BodyFatWeight = weight - leanBodyMass;
    BodyFatPrecentage = (BodyFatWeight * 100) / weight;
  
  } else if (
    $("#formSec input[type='radio']:checked").val() == 2&& !($("#Age").val().length === 0) && !($("#Higeht").val().length === 0) && !($("#Weight").val().length === 0)&& !($("#Waist").val().length === 0)&& !($("#Neck").val().length === 0
  )) {
    fector1 = weight * 0.732 + 8.987;
    fector2 = waist * 3.14;
    leanBodyMass = fector1 - fector2;
    BodyFatWeight = weight - leanBodyMass;
    BodyFatPrecentage = (BodyFatWeight * 100) / weight;
  };
if($("#formSec input[type='radio']:checked").val() == 1 ||$("#formSec input[type='radio']:checked").val() == 2){
    $("#war6").hide();
}
else {
    BodyFatPrecentage = 0;
    $("#war6").show();
  };
  if (!(BodyFatPrecentage==0)) {
    $("#result-text").text(Math.abs(BodyFatPrecentage.toFixed(0)) + "%");
    $("#result-text").show();
    $("#calorie-text").show();
  } else {
    BodyFatPrecentage = 0;
  }

  if ($("#Age").val().length===0) {
    $("#warning-text").show();
    $("#war1").show();

    BodyFatPrecentage = 0;
    console.log("g");
  } else if (!($("#Age").val().length===0)) {
    $("#war1").hide();
  }

  if ($("#Higeht").val().length===0) {
    $("#warning-text").show();

    $("#war2").show();
    BodyFatPrecentage = 0;
  } else if (!($("#Higeht").val().length===0)) {
    $("#war2").hide();
  }

  if ($("#Weight").val().length===0) {
    $("#warning-text").show();

    $("#war3").show();
    BodyFatPrecentage = 0;
  } else if (!($("#Weight").val().length===0)) {
    $("#war3").hide();
  }
  if ($("#Waist").val().length===0) {
    $("#warning-text").show();

    $("#war4").show();
    BodyFatPrecentage = 0;
  } else if (!($("#Waist").val().length===0)) {
    $("#war4").hide();
  }
  if ($("#Neck").val().length===0) {
    $("#warning-text").show();

    $("#war5").show();
    BodyFatPrecentage = 0;
  } else if (!($("#Neck").val().length===0)) {
    $("#war5").hide();
  }
  console.log(age);
});
$("#rest-form").click(function () {
  $("#result-text").hide();
  $("#calorie-text").hide();
  $("#warning-text").hide();


});
