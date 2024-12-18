var colorCircles = [];
colorCircles[0] = document.getElementById("red");
colorCircles[1] = document.getElementById("blue");
colorCircles[2] = document.getElementById("green");
colorCircles[3] = document.getElementById("yellow");
colorCircles[4] = document.getElementById("cyan");
colorCircles[5] = document.getElementById("magenta");
colorCircles[6] = document.getElementById("light-green")
colorCircles[7] = document.getElementById("dark-blue")
colorCircles[8] = document.getElementById("pink")
colorCircles[9] = document.getElementById("purple")

var targetColor="#F00";
colorCircles[0].style.height = "80px";
colorCircles[0].style.width = "80px";
var sizePicker = document.getElementById("myrange");

var list=document.getElementById("list");
list.addEventListener("click", pickColor);

var canvas = document.getElementById("canvas");
var canvasContext = canvas.getContext("2d");
canvas.addEventListener("mousemove", drawOnCanvas);

function pickColor(e){
	console.log(e.target.tagName);
	if (e.target.tagName=="LI"){
		if (e.target.id=="red"){
			targetColor="#F00"
		}
		else if (e.target.id=="blue"){
			targetColor="#00F"
		}
		else if (e.target.id=="green"){
			targetColor="#008000"
		}
		else if (e.target.id=="yellow"){
			targetColor="#FF0"
		}
		else if (e.target.id=="cyan"){
			targetColor="#0FF"
		}
		else if (e.target.id=="magenta"){
			targetColor="#F0F"
		}
        else if (e.target.id=="light-green"){
			targetColor="#90ee90"
		}
        else if (e.target.id=="dark-blue"){
			targetColor="#00008b"
		}
        else if (e.target.id=="pink"){
			targetColor="#ffc0cb"
		}
        else if (e.target.id=="purple"){
			targetColor="#800080"
		}
		for (var i = 0; i < 10; i++) {
			colorCircles[i].style.height="50px";
			colorCircles[i].style.width="50px";
		}
		e.target.style.height = "80px";
		e.target.style.width = "80px";
	}
}

function drawOnCanvas(e){
	if (e.which==1){
		canvasContext.fillStyle=targetColor;
		canvasContext.beginPath();

		canvasContext.arc(e.offsetX, e.offsetY, sizePicker.value, 0, Math.PI*2);
		canvasContext.fill();
	}
}

