(function(win, doc){
  var image, enable;
  chrome.storage.local.get(["image", "enable"], function(items) {
    image = items.image;
    enable = items.enable;
    console.log(enable);
  });

  var style = document.createElement('style');
  style.type = 'text/css';
  style.innerHTML = '.product-name__mock { width: 100%; position: absolute; z-index: 100; top: 0; left: 0; opacity: 0.4, pointer-events: none;}';
  window.onload = function() {
    if(!enable) { return; }
    doc.querySelector('head').appendChild(style);
    var img = document.createElement("img");
    img.src = image;
    img.className = "product-name__mock";
    doc.body.appendChild(img, doc.firstChild);
  };

  //  var image = doc.querySelector(".js-image-input");
  //  window.onload = function() {
  //    var img = document.createElement("img");
  //    img.src="file:///Users/kawasaki-atsushi/Documents/smart-toilet/sp_170119.png";
  //    img.width="100%";
  //    doc.body.appendChild(img, doc.firstChild);
  //    // console.log(doc.body);
  //  };
  //  // window.alert("hellow");
  //  // var p = document.createElement("p");
  //  // doc.body.appendChild(p);

  //  // console.log(image);
  //  // image.style.display = "none";

})(window, document);
