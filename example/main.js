"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var picture =
/*#__PURE__*/
function () {
  function picture() {
    _classCallCheck(this, picture);
  }

  _createClass(picture, [{
    key: "src",
    value: function src() {//输入
    }
  }, {
    key: "pipe",
    value: function pipe() {// 管道
    }
  }, {
    key: "dest",
    value: function dest() {// 输出
    }
  }, {
    key: "save",
    value: function save() {// 保存图像
    }
  }, {
    key: "restore",
    value: function restore() {// 还原到上一个保存的图像
    }
  }]);

  return picture;
}();

module.exports = {
  picture: picture
};