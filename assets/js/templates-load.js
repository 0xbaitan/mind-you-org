$(document).ready(
  $(function () {
    var includes = $("[data-include]");
    $.each(includes, function () {
      var file = "templates/includes/" + $(this).data("include") + ".html";
      $(this).load(file);
    });
  })
);
