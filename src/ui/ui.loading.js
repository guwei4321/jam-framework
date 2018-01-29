/**
* @class cUILoading
* @description loading层
*/
define(['../common/base', './ui.layer'], function (cBase, Layer) {

    var options = {};

    /** 相关属性 */
    options.__propertys__ = function () {
        this.needMaskHide = false; // 是否需要遮罩层
        this.loadHtml = '<div class="' + this.prefix+'loading-content"></div>'; // loading内容
        this['class'] = this.prefix + 'loading';

    };

    /** 构造函数入口 */
    options.initialize = function ($super, opts) {
        this.rootBox = this.rootBox || $('body');
        $super($.extend(this, opts));
    };

    options.onShow = function(){
        this.contentDom.html(this.loadHtml);
        this.reposition();
    }

    return new cBase.Class(Layer, options);

});