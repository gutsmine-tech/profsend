export default function sub() {
  $(function () {
    var div = $("#snsData");
    var elems =
      '<div class="input-field col s12">' +
      '<input type="text" name="formSNS" id="snsText" class="profelem"  maxlength="25" placeholder="">' +
      '<label for="snsText">SNS情報：</label>' +
      "</div>";
    div.html(elems);
    div.hide();
    $(document).on("keyup", "#snsText", window.i);
    $(document).on("change", "#snsText", window.i);

    $("#snsDataBtn").click(function () {
      if (document.getElementById("snsText")) {
        div.fadeIn;
      } else {
        div.fadeOut;
      }
      setTimeout(function () {
        i();
      }, 100);
      return false;
    });
  });
}
