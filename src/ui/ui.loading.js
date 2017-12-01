/**
* @class cUILoading
* @description loading层
*/
define(['libs', 'cBase', 'cUILayer'], function (libs, cBase, Layer) {

    var options = {};

    var _config = {
        prefix: 'jui-'
    };

    /** 用于abstractView执行的对象 */
    

    // _attributes.onCreate = function () { };

    // _attributes.onShow = function () {
        
    // };

    /** 相关属性 */
    options.__propertys__ = function () {
        this.needMaskHide = false;
        this.contentDom;
        this.loadHtml = '';
    };

    /** 构造函数入口 */
    options.initialize = function ($super, opts) {
        var _attributes = {};
        this.rootBox = this.rootBox || $('body');
        _attributes['class'] = _config.prefix + 'loading';
        $super($.extend(_attributes, opts));
    };

    options.onShow = function(){
        this.contentDom.html('<div class="jui-loading-content"></div>');
        this.reposition();
    }

    /**
    * @method setHtml
    * @param html {String}    内容体
    * @description 设置loading的内容
    */
    options.setHtml = function (html) {
        this.loadHtml = html;
    };

    return new cBase.Class(Layer, options);

});