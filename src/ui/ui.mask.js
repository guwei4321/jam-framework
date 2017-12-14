/**
* @description 蒙版
*/
define(['libs', 'cBase', 'cUIBase', 'cUIAbstractView'], function (libs, cBase, cUIBase, AbstractView) {

    var options = {};

    /** 相关属性 */
    options.__propertys__ = function () {
        this.isRootBody = true;  //  父级元素是否是body节点
        this.disableScroll = false;  // 禁止滚动
        this.backgroundColor = '#000';
        this.prefix = 'jui-';

    }
    /** 构造函数入口 */
    options.initialize = function ($super, opts) {
        if (!!opts ) {
            this.isRootBody = this.getRootBody(opts.rootBox);
        }
        this.bindEvent(opts);
        $super($.extend(this,opts));
    };

    /**
    * @method bindEvent
    * @description 为各个事件点注册事件
    */
    options.bindEvent = function (opts) {
        this.addEvent('onCreate', function () {
            this.setRootStyle(opts);
            this.addClass(this.prefix + 'mask');
            this.onResize = $.proxy(function () {
                this.resize();
            }, this);
            if (this.isRootBody && this.disableScroll) {
               
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
            if (this.isRootBody && this.disableScroll) {
                $(window).bind('resize', this.onResize);
                $(window).bind('keydown', this.preventkeyDownScroll);
                $(window).bind('mousewheel', this.prevent );

                this.onResize();
            }
            
        });

        this.addEvent('onHide', function () {
            if (this.isRootBody && this.disableScroll) {
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
        if (!el) return true;
        if (el.attr('tagName').toLowerCase() !== 'body' ) {
            return false;
        } else {
            return true;
        }
    }

    /**
    * @method setRootStyle
    * @description 设置根节点样式
    */
    options.setRootStyle = function (opts) {
        console.log(opts)
        this.root.css({
            position: 'absolute',
            left: '0px',
            top: '0px',
            backgroundColor: opts.backgroundColor || '#000'
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
    options.resize = function () {
        var pos  = cUIBase.getPageScrollPos();
        if (this.isRootBody) {
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