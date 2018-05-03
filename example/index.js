elementResizeEvent = require('../index.js');

element = document.getElementById("resize");
window.p = p = document.getElementById("width");
console.log(p);
console.log(elementResizeEvent);
console.log(elementResizeEvent(element, function() {
  console.log("resized!");
  console.log(element.offsetWidth);
  console.log(p);
  console.log(element.offsetWidth + "px wide");
  p.innerHTML = element.offsetWidth + "px wide";
}));

element1 = document.getElementById("resize1");
window.p1 = p1 = document.getElementById("width1");
console.log(p1);
console.log(elementResizeEvent(element1, function() {
  console.log("resized!");
  console.log(element1.offsetWidth);
  console.log(p1);
  console.log(element1.offsetWidth + "px wide");
  p1.innerHTML = element1.offsetWidth + "px wide";
}));