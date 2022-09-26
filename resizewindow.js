<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ye</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    
    <p>Resize the browser window to fire the <code>resize</code> event.</p>
<p>Window height: <span id="height"></span></p>
<p>Window width: <span id="width"></span></p> 
    <script src="script.js"></script>
</body>
</html>
const heightOutput = document.querySelector("#height");
const widthOutput = document.querySelector("#width");

function resizeListener() {
  heightOutput.textContent = window.innerHeight;
  widthOutput.textContent = window.innerWidth;
}

window.addEventListener("resize", resizeListener);
