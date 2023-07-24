const c = document.getElementById("myCanvas");
const canvasHeight = c.height;
const canvasWidth = c.width;
const ctx = c.getContext("2d");

function drawCircle() {
    //畫出黑色的背景
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);

    //畫出圓球
    //fillarc(x, y, radius, startAngle, endAngle)
    ctx.beginPath();
    ctx.arc()
}

let game = setInterval(drawCircle, 25);