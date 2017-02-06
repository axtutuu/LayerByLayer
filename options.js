(function(win, doc){
  var reader = new FileReader();
  var submit = doc.querySelector(".js-submit");

  console.log(submit);
  var image = doc.querySelector(".js-image-input");
  var checkbox = doc.querySelector(".js-check-input");
  console.log(checkbox);
  console.log(image);
  submit.addEventListener('click', function(){
    if(image.files.length > 0) {
      base64 = reader.readAsDataURL(image.files[0]);
    }

    var base64;
    reader.onload = function() {
      if(reader) {
        base64 = reader.result;
      }
      chrome.storage.local.set({
        "image": base64 || null,
        "enable": checkbox.checked
      });
      console.log(reader.result);
      console.log(checkbox.checked);
      console.log(chrome.storage);
    };
  });
})(window, document);
