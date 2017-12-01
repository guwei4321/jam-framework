/**
* @description 蒙版
*/
define(['libs', 'cBase', 'cUIBase', 'cUIAbstractView'], function (libs, cBase, cUIBase, AbstractView) {

    var options = {};
    var isRootBody = false;
    var disableScroll = false;

    var _config = {
        prefix: 'jui-'
    };

    /** 相关属性 */
    options.__propertys__ = function () {
        
    };

    /** 构造函数入口 */
    options.initialize = function ($super, opts) {
        var allowOptions = {
            disableScroll: opts.disableScroll || disableScroll 
        }
        disableScroll = opts.disableScroll;
        this.bindEvent(opts);
        if (this.getRootBody(opts.rootBox)){
            isRootBody = true;
        }
        this.addClass(_config.prefix + 'mask');
        $super($.extend(allowOptions, opts));
    };

    /**
    * @method bindEvent
    * @description 为各个事件点注册事件
    */
    options.bindEvent = function (opts) {
        // var isRootBody =  this.isRootBody = this.getRootBody(opts.rootBox);
        this.addEvent('onCreate', function () {
            this.setRootStyle(opts);
            this.onResize = $.proxy(function () {
                this.resize(isRootBody);
            }, this);
            if (this.isRootBody && disableScroll) {
               
                this.prevent = $.proxy(function() {
                    cUIBase.preventDefault();
                }, this);
                this.preventkeyDownScroll = $.proxy(function () {
                    cUIBase.preventkeyDownScroll();
                }, this);

            }
            this.onResize();
        });

        this.addEvent('onShow', function () {
            this.setzIndexTop(-1);
            if (this.isRootBody && disableScroll) {
                $(window).bind('resize', this.onResize);
                $(window).bind('keydown', this.preventkeyDownScroll);
                $(window).bind('mousewheel', this.prevent );

                this.onResize();
            }
            
        });

        this.addEvent('onHide', function () {
            if (this.isRootBody && disableScroll) {
                $(window).unbind('resize', this.onResize);
                $(window).unbind('keydown', this.preventkeyDownScroll);
                $(window).unbind('mousewheel', this.prevent);
            }
        });

    };

    /**
    * @method isRootBody
    * @description 判断根节点是否是body
    */
    options.getRootBody = function(el){
        if (!el) return false;
        if (el.attr('tagName').toLowerCase() === 'body' ) {
            isRootBody = true;
        } else {
            isRootBody = false;
        }
    }

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
        return '';
    };

    /**
    * @method resize
    * @description 尺寸改变时候要重新计算位置
    */
    options.resize = function (isRootBody) {
        var pos  = cUIBase.getPageScrollPos();
        if (isRootBody) {
            this.root.css({
                width: pos.width + 'px',
                height: pos.pageHeight + 'px'
            });
        } else {
            this.root.css({
                width: '100%',
                height: '100%'
            });
        }
        
    };

    return new cBase.Class(AbstractView, options);

});