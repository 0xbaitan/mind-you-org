/**Foundation */
$(document).foundation();

/** Flickity */
$(".carousel").flickity({
  // options
  cellAlign: "center",
  contain: true,
  pageDots: true,
  setGallerySize: false,
  resize: false,
});

/** Disables scrolling when mobile navigation bar is activated */
$(".menu-icon").click(function () {
  $("#main").toggleClass("m-no-scroll");
  $("#main").toggleClass("m-no-touch");
});
