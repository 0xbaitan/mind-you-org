var project_bubble_format =
  '<div class="cell"> \n\
    <div class="card m-projects-bubble"> \n\
    <img \n\
    src="{{project-image}}" \n\
    /> \n\
    <div class="card-section"> \n\
    <h1 class="m-projects-bubble-text">{{project-title}}</h1> \n\
    <p>{{project-info}}</p> \n\
    <a href="{{project-page}}">Read more</a> \n\
    </div> \n\
    </div> \n\
    </div>';

var project_bubbles = [];

$.getJSON("assets/data/our-projects/our-projects.json", function (data) {
  $.each(data.projects, function (index) {
    var project_bubble = project_bubble_format;
    $.each(data.projects[index], function (key, value) {
      var expression = "{{" + key + "}}";
      project_bubble = project_bubble.replace(expression, value);
    });
    project_bubbles.push(project_bubble);
  });

  $(".m-section-bubble").html(project_bubbles);
});
