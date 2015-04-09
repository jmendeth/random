var tooltip = $("<ul id='tooltip' style='display: none;'>");
tooltip.appendTo(document.body);

var md = $("#markdown");
var mdEl = md.get(0);

function renderTooltip(event) {
  // Calculate tree path
  var stack = [];
  var target = event.target;
  while (target != mdEl) {
    stack.push("<li>" + target.getAttribute("class") + "</li>");
    target = target.parentElement;
  }

  // Render the tooltip
  if (stack.length == 0) {
    tooltip.attr("style", "display: none;");
    return;
  }
  tooltip.html(stack.reverse().join(""));
  var x = event.pageX + 3, y = event.pageY + 3;
  tooltip.attr("style", "left:"+x+"px;top:"+y+"px;");
}

md.mouseenter(renderTooltip).mousemove(renderTooltip);
