$(this).append(
  '<div class="preloader-wrapper small active"><div class="spinner-layer spinner-green-only"><div class="circle-clipper left"><div class="circle"></div></div><div class="gap-patch"><div class="circle"></div></div><div class="circle-clipper right"><div class="circle"></div></div></div></div>'
);
setTimeout(function() {
  document.getElementById("preloader").style.display = "none";
}, 1000);
