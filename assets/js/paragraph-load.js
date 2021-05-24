const paragraph_template =
  '<p class="cell small-offset-1 small-10 m-paragraph align-left">\
  {{text}}\
  </p>\
  <br />';

const title_template =
  '<h1 class="cell small-offset-1 small-10 m-heading-center">{{title}}</h1>';
//<div class="grid-x grid-margin-x m-content-pane"><div class="grid-x grid-margin-x m-content-pane">

const title_expr = "root/heading[@index={{index}}]/title";
const paragraph_expr = "root/heading[@index={{index}}]/paragraph/text";
var paragraphs = [];

function getNodeValue(node) {
  return node.childNodes[0].nodeValue;
}

function loadXML(filepath, headings_count) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      processParagraphs(this, headings_count);
    }
  };
  xhttp.open("GET", filepath, true);
  xhttp.send();
}

function processParagraphs(xml, headings_count) {
  var headings_index;
  var xmlDoc = xml.responseXML;
  var paragraph_xpath, title_xpath;
  var title_nodes, paragraph_nodes;
  var title_value, paragraph_value;
  var title_html, paragraph_html;
  if (xmlDoc.evaluate) {
    for (
      headings_index = 1;
      headings_index <= headings_count;
      headings_index++
    ) {
      paragraph_xpath = paragraph_expr.replace("{{index}}", headings_index);
      title_xpath = title_expr.replace("{{index}}", headings_index);

      title_nodes = xmlDoc.evaluate(
        title_xpath,
        xmlDoc,
        null,
        XPathResult.ANY_TYPE,
        null
      );
      paragraph_nodes = xmlDoc.evaluate(
        paragraph_xpath,
        xmlDoc,
        null,
        XPathResult.ANY_TYPE,
        null
      );

      title_value = getNodeValue(title_nodes.iterateNext());
      var next_paragraph_node = paragraph_nodes.iterateNext();

      title_html = title_template.replace("{{title}}", title_value);
      paragraphs.push(title_html);

      while (next_paragraph_node) {
        paragraph_value = getNodeValue(next_paragraph_node);
        paragraph_html = paragraph_template.replace("{{text}}", paragraph_value);
        paragraphs.push(paragraph_html);
        next_paragraph_node = paragraph_nodes.iterateNext();
      }
     
      console.log(paragraph_xpath);
      console.log(title_xpath);
    }
  }
  console.log(paragraphs);
  $(".m-section-content-pane").html(paragraphs);
}

$(document).ready(
  $(function () {
    var content_paths = $("[data-xml-content-path]");
    var path;
    var headings_count = $("[data-headings-count]").data("headings-count");
    $.each(content_paths, function () {
      path = $(this).data("xml-content-path");
      loadXML(path, parseInt(headings_count));
    });
  })
);
