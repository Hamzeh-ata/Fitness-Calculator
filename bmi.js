var age,highet,weight,gender,bmi,hight2;
$("#submit-form").click(function () {
    age = $("#Age").val();
    highet = $("#Higeht").val();
    weight = $("#Weight").val();
    if (!($("#Age").val().length === 0) && !($("#Higeht").val().length === 0) && !($("#Weight").val().length === 0))
       {
        hight2=highet/100;
         bmi=weight/(hight2*hight2);
       }
       if ($("#Age").val().length===0) {
        $("#warning-text").show();
        $("#war1").show();
        bmi = 0;
        console.log("g");
      } else if (!($("#Age").val().length===0)) {
        $("#war1").hide();
      }
      if ($("#Higeht").val().length===0) {
        $("#warning-text").show();
        $("#war2").show();
        bmi = 0;
      } else if (!($("#Higeht").val().length===0)) {
        $("#war2").hide();
      }
      if ($("#Weight").val().length===0) {
        $("#warning-text").show();
        $("#war3").show();
        bmi = 0;
      } else if (!($("#Weight").val().length===0)) {
        $("#war3").hide();
      }
      if (!(bmi==0)) {
        $("#result-text").text(bmi.toFixed(0));
        $("#result-text").show();
        $("#calorie-text").show();
      }
});
$("#rest-form").click(function () {
    $("#result-text").hide();
    $("#calorie-text").hide();
    $("#warning-text").hide();
 
  
  });