/**
* @description 蒙版
*/
define(['libs', 'cBase', 'cUIBase', 'cUIAbstractView'], function (libs, cBase, cUIBase, AbstractView) {

    var options = {};

    var _config = {
        prefix: 'cui-'
    };

    /** 相关属性 */
    options.__propertys__ = function () {
    };

    /** 构造函数入口 */
    options.initialize = function ($super, opts) {
        this.bindEvent();
        this.addClass(_config.prefix + 'mask');
        $super(opts);
    };

    /**
    * @method bindEvent
    * @description 为各个事件点注册事件
    */
    options.bindEvent = function () {
        this.addEvent('onCreate', function () {
            this.setRootStyle();
            this.onResize = $.proxy(function () {
                this.resize();
            }, this);
            this.prevent = $.proxy(function() {
                cUIBase.preventDefault();
            }, this);

            this.onResize();
        });

        this.addEvent('onShow', function () {
            var that = this;
            this.setzIndexTop(-1);
            $(window).bind('resize', this.onResize);
            $(window).bind('keydown', this.prevent);
            $(window).bind('mousewheel', this.prevent );

            this.onResize();
        });

        this.addEvent('onHide', function () {
            $(window).unbind('resize', this.onResize);
            $(window).unbind('keydown', this.prevent);
            $(window).unbind('mousewheel', this.prevent);
        });

    };

    /**
    * @method setRootStyle
    * @description 设置根节点样式
    */
    options.setRootStyle = function () {
        this.root.css({
            position: 'absolute',
            left: '0px',
            top: '0px'
        });
    };

    /**
    * @method createHtml
    * @description 重写抽象类结构dom
    */
    options.createHtml = function () {
        return '<div></div>';
    };

    /**
    * @method resize
    * @description 尺寸改变时候要重新计算位置
    */
    options.resize = function () {
        var pos  = cUIBase.getPageScrollPos();
        this.root.css({
            width: pos.width + 'px',
            height: pos.pageHeight + 'px'
        });
    };

    return new cBase.Class(AbstractView, options);

});