var line = document.getElementById("line");
var lineRect = line.getBoundingClientRect();
var lineCenterX = lineRect.left + lineRect.width / 2;
var lineCenterY = lineRect.top + lineRect.height / 2;

line.style.transformOrigin = lineCenterX + "px " + lineCenterY + "px";
line.style.transform = "rotate(45deg)";
