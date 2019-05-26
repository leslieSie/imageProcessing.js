(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
let main = require('./main.js');

var img = new Image();
img.src = "public/test1.jpg";
// 加载完成图片之后才能够执行canvas的操作
img.onload = function() {
    let canvas = document.querySelector('canvas');
    let cxt = canvas.getContext("2d");
    cxt.drawImage(img, 0, 0, canvas.width, canvas.height);
}
},{"./main.js":2}],2:[function(require,module,exports){
let utils = require('./utils');

class Picture {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.currentImage = '';
        this.leastReStore = [];
    }
    src(options) {
        //输入
        try {

            return this;
        } catch (error) {

        }

    }
    pipe(name) {
        // 管道
        console.log(name);
        return this;
    }
    dest() {
        // 输出
    }
    save() {
        // 保存图像
    }
    restore() {
        // 还原到上一个保存的图像
    }

}

module.exports = Picture;
},{"./utils":3}],3:[function(require,module,exports){
module.exports = {
    test: 1
}
},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zcmMvaW5kZXguanMiLCIuLi9zcmMvbWFpbi5qcyIsIi4uL3NyYy91dGlscy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJsZXQgbWFpbiA9IHJlcXVpcmUoJy4vbWFpbi5qcycpO1xyXG5cclxudmFyIGltZyA9IG5ldyBJbWFnZSgpO1xyXG5pbWcuc3JjID0gXCJwdWJsaWMvdGVzdDEuanBnXCI7XHJcbi8vIOWKoOi9veWujOaIkOWbvueJh+S5i+WQjuaJjeiDveWkn+aJp+ihjGNhbnZhc+eahOaTjeS9nFxyXG5pbWcub25sb2FkID0gZnVuY3Rpb24oKSB7XHJcbiAgICBsZXQgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignY2FudmFzJyk7XHJcbiAgICBsZXQgY3h0ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuICAgIGN4dC5kcmF3SW1hZ2UoaW1nLCAwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xyXG59IiwibGV0IHV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xyXG5cclxuY2xhc3MgUGljdHVyZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcih3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuY3VycmVudEltYWdlID0gJyc7XHJcbiAgICAgICAgdGhpcy5sZWFzdFJlU3RvcmUgPSBbXTtcclxuICAgIH1cclxuICAgIHNyYyhvcHRpb25zKSB7XHJcbiAgICAgICAgLy/ovpPlhaVcclxuICAgICAgICB0cnkge1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIHBpcGUobmFtZSkge1xyXG4gICAgICAgIC8vIOeuoemBk1xyXG4gICAgICAgIGNvbnNvbGUubG9nKG5hbWUpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgZGVzdCgpIHtcclxuICAgICAgICAvLyDovpPlh7pcclxuICAgIH1cclxuICAgIHNhdmUoKSB7XHJcbiAgICAgICAgLy8g5L+d5a2Y5Zu+5YOPXHJcbiAgICB9XHJcbiAgICByZXN0b3JlKCkge1xyXG4gICAgICAgIC8vIOi/mOWOn+WIsOS4iuS4gOS4quS/neWtmOeahOWbvuWDj1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBQaWN0dXJlOyIsIm1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgdGVzdDogMVxyXG59Il19
