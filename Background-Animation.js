// JavaScript Document

<script>
document.getElementById("demo").onmouseover = function() {mouseOver()};
document.getElementById("demo").onmouseout = function() {mouseOut()};

function mouseOver() {
  document.getElementById("demo").style.color = "#FF6D00"
}

function mouseOut() {
  document.getElementById("demo").style.color = "black"
}
</script>