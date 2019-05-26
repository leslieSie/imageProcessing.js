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