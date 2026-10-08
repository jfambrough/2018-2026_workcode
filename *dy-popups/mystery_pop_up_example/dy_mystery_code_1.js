$(document).ready(function () {
  var dy_option1 = $("#image-option1");
  var dy_option2 = $("#image-option2");
  var dy_option3 = $("#image-option3");
  var submitMysteryOption = $("#mp-cta1");
  var space1 = $("#spacing-1");
  var prizeHeader = $("#mp-header");
  var prizeBody = $("#mp-body");
  var prizeDisclaimer = $("#mp-disclaimer");
  var space2 = $("#spacing-2");
  var modalCTA = $("#mp-cta");
  var continueShopping = $("#mp-cta2");
  var selectionMade = false;

  // SELECTION FUNCTIONS
  dy_option1.on("click", function (e) {
    dy_option1.css({
      "border-left": "4px solid ${selected-color}",
      "border-right": "4px solid ${selected-color}",
      "border-top": "3px solid ${selected-color}",
      "border-bottom": "3px solid ${selected-color}",
    });
    dy_option2.css("border", "0px");
    dy_option3.css("border", "0px");
    selectionMade = true;
  });

  dy_option2.on("click", function (e) {
    e.preventDefault();
    dy_option2.css({
      "border-left": "4px solid ${selected-color}",
      "border-right": "4px solid ${selected-color}",
      "border-top": "3px solid ${selected-color}",
      "border-bottom": "3px solid ${selected-color}",
    });
    dy_option3.css("border", "0px");
    dy_option1.css("border", "0px");
    selectionMade = true;
  });

  dy_option3.on("click", function (e) {
    e.preventDefault();
    dy_option3.css({
      "border-left": "4px solid ${selected-color}",
      "border-right": "4px solid ${selected-color}",
      "border-top": "3px solid ${selected-color}",
      "border-bottom": "3px solid ${selected-color}",
    });
    dy_option2.css("border", "0px");
    dy_option1.css("border", "0px");
    selectionMade = true;
  });

  submitMysteryOption.on("click", function (e) {
    if (selectionMade === true) {
      prizeHeader.html("<div id='mod2Header'>${modal 2 header}<\/div>");
      prizeBody.html(
        "<div id='mod2Body' align = 'center'>Use code <span style = 'font-weight:bold;font-size:23px;letter-spacing:2px;color:#000000;'>${promo code}<\/span> at checkout.  If you would like more time to shop, please write the code down to reference later. Your offer is valid through ${valid-until-date}. ${offer details - modal 2}<\/p><p  style = 'text-align:center;padding-right:60px;padding-left:60px;font-style:italic;font-size:18px;font-family:Arimo;'> <\/div>",
      );
      modalCTA.html(
        "<a style='margin-top:20px;' class='button' href='https://www.jny.com/discount/${promo code}?redirect=${redirect-to}' id='mp-cta2'>${button-2-cta}</a>",
      );
      prizeDisclaimer.html(
        "<div id='disclaim-mod2' style = 'color:#8c8c8c;text-align:center;'>${disclaimer text}<\/div>",
      );
      prizeDisclaimer.css("height", "10%");
      prizeHeader.css("height", "20%");
      prizeHeader.css("width", "85%");
      prizeBody.css("height", "35%");
      prizeBody.css("width", "80%");
      modalCTA.css("height", "20%");
      space2.css("height", "0%");

      return true;
    } else {
      alert(
        "Please select one of the three images before submitting your answer.",
      );
      return false;
    }
  });
});
