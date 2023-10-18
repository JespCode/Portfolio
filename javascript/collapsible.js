// Functionality for simple buttons that reveal a collapsible.

var collapse = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < collapse.length; i++) {
  collapse[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var collcontent = this.nextElementSibling;
    if (collcontent.style.display === "block") {
      collcontent.style.display = "none";
    } else {
      collcontent.style.display = "block";
    }
  });
}
