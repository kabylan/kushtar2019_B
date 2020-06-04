
// при перезагрузке страницы, поле должна быть пустым
document.getElementById("cadrsInBitsInput").value = "";


// для копирования анимацию в двоичном виде в буффер копирования
function copyToClipboard() {

  // булевые значения перевести в двоичные числа
  cadrsInBit = [];

  // перебрать кадры анимации
  for (var i = 0; i < cadrs.length; i++) {

    var cadr = cadrs[i];
    var cadrInBit = [];

    // перебрать булевые значения в кадре
    for (var j = 0; j < cadr.length; j++) {

        if (cadr[j] == true) { // если истина, то это 1

          cadrInBit[j] = 1;
        } else {

          cadrInBit[j] = 0;
        }
    }

    cadrsInBit[i] = cadrInBit;
  }

  console.log(cadrsInBit);

  // write
  document.getElementById("cadrsInBitsInput").value = JSON.stringify(cadrsInBit);

  // get the text field
  var copyText = document.getElementById("cadrsInBitsInput");

  // select the text field
  copyText.select();

  // copy the text inside the text field
  document.execCommand("copy");

  // alert the copied text
  alert("Скопировано кадров в буффер - " + cadrsInBit.length);
}
