/**
* @class cUILayer
* @description 弹出层类的父类
*/
define(['../common/base', './ui.abstract.view', './ui.mask'], function (cBase, AbstractView, Mask) {

    var options = {};


    /** 相关属性 */
    options.__propertys__ = function (opts) {
        this.tpl = '';
        this.content = '';
        this.sleep = -1;
        this.contentDom;
        this.prefix = 'jui-';


        this.viewdata = {};
        this.windowResizeHander;
        this.setIntervalResource;
        this.setIntervalTotal = 0;
    };

    options._resetDefaultProperty = function () {
        // 是否需要蒙版
        this.needMask = true;
        this.tpl = [
            '<div class="' + this.prefix + 'layer-padding">',
            '<div class="' + this.prefix + 'layer-content">{{content}}</div>',
            '</div>'
        ].join('');
        // 是否需要点击蒙版删除
        this.needMaskHide = true;
    }

    /** 构造函数入口 */
    options.initialize = function ($super, opts) {
        this._resetDefaultProperty();
        var allowConfig = {
            content: true
        };
        this.mask = new Mask({
            rootBox: opts.rootBox || $('body'),
            disableScroll: opts.disableScroll || false,
            prefix: opts.prefix,
            backgroundColor: opts.backgroundColor || 'rgba(0,0,0,.7)'
        });
        this.setOption(function (k, v) {
            switch (true) {
                case allowConfig[k]:
                    this[k] = v;
                    break;
                case 'class' === k:
                    this.addClass(v);
                    break;
            }
        });
        this.bindEvent(opts);
        $super($.extend(this, opts));
        this.loadViewData();
    };

    /**
    * @method loadViewData
    * @description 加载viewdata
    */
    options.loadViewData = function () {
        this.viewdata.content = this.content;
    };

    /**
    * @method setViewData
    * @param data {Object}    数据参数
    * @description 设置viewdata
    */
    options.setViewData = function (data) {
        this.viewdata = cUtility.mix(this.viewdata, data);
        this.setRootHtml(this.createHtml());
    };

    /**
    * @method bindEvent
    * @description 绑定事件
    */
    options.bindEvent = function (opts) {
        this.addEvent('onCreate', function () {
            this.windowResizeHander = $.proxy(this.reposition, this);
            this.contentDom = this.root.find('.' + this.prefix + 'layer-content');
        });

        this.addEvent('onShow', function () {
            if (this.needMask) {
                this.mask.show();
            }
            $(window).bind('resize', this.windowResizeHander);

            this.reposition();
            this.setzIndexTop();
            if (this.needMask && this.needMaskHide) {
                this.maskToHide();
            }
            if (opts.sleep > 0) {
                setTimeout($.proxy(function () {
                    this.hide();
                    opts.delayCallback && opts.delayCallback();
                    this.trigger('onHide');
                }, this), opts.sleep * 1000);

            }
        });

        this.addEvent('onHide', function () {
            $(window).unbind('resize', this.windowResizeHander);
            clearInterval(this.setIntervalResource);
            this.root.css('visibility', 'visible');
            if (this.needMask) {
                this.mask.root.off('click');
                this.mask.hide();
            }
        });
    };

    /**
    * @method createHtml
    * @description 移除各个事件点添加需要回调的函数
    */
    options.createHtml = function () {
        return mustache.to_html(this.tpl, this.viewdata).replace(/^\s*/mg, '')
    };

    /**
    * @method maskToHide
    * @param fn {function}    回调函数
    * @description 点击蒙版关闭控件时候要触发的事件
    */
    options.maskToHide = function (fn) {

        this.mask.root.on('click', $.proxy(function () {
            this.hide();
            typeof fn == 'function' && fn();
            this.mask.root.off('click');
        }, this));

        this.mask.addEvent('onHide', function () {
            this.root.off('click');
            this.root.hide();
        });

    };

    return new cBase.Class(AbstractView, options);
});