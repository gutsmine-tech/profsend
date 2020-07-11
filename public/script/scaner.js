import Tesseract from 'tesseract.js'
$(function () {
  $("#scanFile").change(function (e) {

    var scanImage = $(this)[0].files[0];
    if (scanImage) {
      var reader = new FileReader();
      reader.onload = function (e) {
        $("#preview").attr('src', e.target.result);
      }
      reader.readAsDataURL(e.target.files[0]);
      Tesseract.recognize(
        scanImage,
        'jpn',
        {
          logger: p => $("#loading").text(p.status + ":" + Math.round(p.progress * 100) + "%")
        }
      )
        .then(result => {
          var ris = result.data.text;
          var ris2 = ris
          console.log(ris);
          var risrep = ris2.replace(":", " ");
          while (risrep !== ris2) {
            ris2 = ris2.replace('_', '-');
            risrep = risrep.replace('_', '-');
          }
          $("#loading").text("実行完了！");
          $("#scanData").html(risrep);
        })
      return false;
    }
  })
});
