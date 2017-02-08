(function(win, doc){
  var base64;
  var reader = new FileReader();
  var submit = doc.querySelector(".js-submit");

  var image = doc.querySelector(".js-image-input");
  var checkbox = doc.querySelector(".js-check-input");
  submit.addEventListener('click', function(){
    if(image.files.length > 0) {
      base64 = reader.readAsDataURL(image.files[0]);
    }

    reader.onload = function() {
      setChrome({
        'image': reader.result,
        'enable': checkbox.checked
      });
      return reader.result;
    };

    setChrome({
      'image': reader.result,
      'enable': checkbox.checked
    });
  });

  function setChrome(data) {
    var result = data || {};
    chrome.storage.local.set(data);
  }
})(window, document);
