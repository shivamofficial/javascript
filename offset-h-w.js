<!DOCTYPE html>
<html>
<style>
#myDIV {
  height: 250px;
  width: 400px;
  padding: 10px;
  margin: 15px;
  border: 5px solid red;
  background-color: lightblue;
  overflow: auto;
}

#myDIV2 {
  height: 250px;
  width: 400px;
  padding: 10px;
  margin: 15px;
  border: 10px solid red;
  background-color: lightblue;
}

#content {
  height: 800px;
  width: 2000px;
  background-color: lightyellow;
}
</style>

<body>
<h1>The Element Object</h1>
<h2>The clientHeight and clientWidth Properties</h2>
<h2>The offsetHeight and offsetWidth Properties</h2>

<div id="myDIV">
  <div id="content"></div>
</div>

<div id="myDIV2">
  <div id="content2"></div>
</div>

<script>
const element = document.getElementById("myDIV");
let text = "";
text += "clientHeight: " + element.clientHeight + "px<br>";
text += "offsetHeight: " + element.offsetHeight + "px<br>";
text += "clientWidth: " + element.clientWidth + "px<br>";
text += "offsetWidth: " + element.offsetWidth + "px";
document.getElementById("content").innerHTML = text;

const element2 = document.getElementById("myDIV2");
text = "";
text += "clientHeight: " + element2.clientHeight + "px<br>";
text += "offsetHeight: " + element2.offsetHeight + "px<br>";
text += "clientWidth: " + element2.clientWidth + "px<br>";
text += "offsetWidth: " + element2.offsetWidth + "px";
document.getElementById("content2").innerHTML = text;
</script>

</body>
</html>
