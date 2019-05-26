let main = require('./main.js');

var img = new Image();
img.src = "public/test1.jpg";
// 加载完成图片之后才能够执行canvas的操作
img.onload = function() {
    let canvas = document.querySelector('canvas');
    let cxt = canvas.getContext("2d");
    cxt.drawImage(img, 0, 0, canvas.width, canvas.height);
}