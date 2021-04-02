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
  $(".m-main-content-section").toggleClass("m-util-hide");
});

$(window).on("resize", function () {
  var win = $(this); //this = window
  if (win.width() <= 1024 && $("#example-dropdown").css("display") == "block") {
    $(".m-main-content-section").addClass("m-util-hide");
  } else if ($(".m-main-content-section").hasClass("m-util-hide")) {
    $(".m-main-content-section").removeClass("m-util-hide");
  }
});
