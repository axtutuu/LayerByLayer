(function(win, doc){
  var reader = new FileReader();
  var image = doc.querySelector(".js-image-input");
  var checkbox = doc.querySelector(".js-check-input");
  console.log(checkbox);
  console.log(image);
  image.addEventListener('change', function(){
    reader.readAsDataURL(this.files[0]);

    reader.onload = function() {
      chrome.storage.local.set({
        "image": reader.result,
        "enable": checkbox.checked
      });
      console.log(reader.result);
      console.log(checkbox.checked);
      console.log(chrome.storage);
    };

  });
})(window, document);
