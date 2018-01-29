/**
* @description 提示框
*/
define(['../common/base', './ui.layer'], function (cBase, Layer) {

    var options = {};

    options.__propertys__ = function () {
        this['class'] = this.prefix + 'toast';
        this.title = '您好！'
    };

    options.initialize = function ($super, options) {
        $super($.extend(this, options));
    };

    options.onShow = function (callback) {
        this.setContent(this.title);
        this.reposition();
    };

    options.setContent = function (content) {
        this.create();
        this.contentDom.html(content);
    };

    var Toast = new cBase.Class(Layer, options);
    return Toast;
});