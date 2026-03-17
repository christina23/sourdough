document.addEventListener("DOMContentLoaded", function () {
  var lightbox = document.createElement("div");
  lightbox.className = "img-lightbox";
  var lbImg = document.createElement("img");
  lightbox.appendChild(lbImg);
  document.body.appendChild(lightbox);

  document.querySelectorAll(".wiki-content img").forEach(function (img) {
    var wrap = document.createElement("span");
    wrap.className = "img-zoom-wrap";
    img.parentNode.insertBefore(wrap, img);
    wrap.appendChild(img);

    wrap.addEventListener("click", function () {
      lbImg.src = img.src;
      lbImg.alt = img.alt;
      lightbox.classList.add("open");
    });
  });

  lightbox.addEventListener("click", function () {
    lightbox.classList.remove("open");
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") lightbox.classList.remove("open");
  });
});
