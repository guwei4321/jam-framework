define(['cBase', 'cUIAbstractView'], function (cBase, AbstractView) {
    var options = {};

    // var _config = {
    // 	prefix: 'cui-'
    // };

    options.__propertys__ = function () {

    };

    /** 可以传入rootBox已经changed两个参数，一个是控件所处位置，一个是选项改变时候需要触发的事件 */
    options.initialize = function ($super, opts) {
        $super($.extend(this, opts));
        console.log(opts)
        console.log(this.nodes)
        
    };

    /**
     * @method createHtml
     * @description 重写抽象类结构dom
     */
    options.createHtml = function () {
        // $('.bbb').bind('click', $.proxy(this.clicked, this));
        return '';
    };

    

    return new cBase.Class(AbstractView, options);
});