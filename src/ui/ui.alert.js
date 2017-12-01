/**
* @class juiAlter
* @description 提供alter类弹出框
*/
define(['libs', 'cBase', 'cUILayer'], function (libs, cBase, Layer) {

    var _toString = Object.prototype.toString;
    var STYLE_CONFIRM = 'confirm';
    var STYLE_CANCEL = 'cancel';

    var _attributes = {};
    _attributes.onCreate = function () {
        this.loadButtons();
    };

    var options = {};



    var _config = {
        prefix: 'jui-'
    };

    options.__propertys__ = function () {
        this.tpl = [
            '<div class="jui-pop-box">',
                '{{#showTitle}}',
                    '<div class="jui-hd">',
                        '<div class="jui-text-center">{{title}}</div>',
                    '</div>',
                '{{/showTitle}}',
                '<div class="jui-bd">',
                    '<div class="jui-error-tips">{{message}}</div>',
                    '<div class="jui-roller-btns"></div>',
                '</div>',
            '</div>'
        ].join('')
        this.title = '';
        this.message = '';
        this.buttons = [{
            text: '确定',
            type: 'confirm',
            click: function () {
                this.hide();
            }
        }];
        this.viewdata = {
            title: '',
            message: '',
            showTitle: false
        };
        this._resetDefaultProperty();
    };

    options._resetDefaultProperty = function () {
       
    }

    options.initialize = function ($super, opts) {
        var allowOptions = {
            title: true,
            message: true,
            buttons: true,
            showTitle: true
        };
        this.setOption(function (k, v) {
            switch (true) {
                case allowOptions[k]:
                    this[k] = v;
                    break;
            }
        });
        $super($.extend(_attributes, opts));
        this.buildViewData();
    };

    options.buildViewData = function () {
        this.addClass(_config.prefix + 'alert');
        this.viewdata.title = this.title;
        this.viewdata.message = this.message;
        this.viewdata.showTitle = this.showTitle;
    };
    options.setViewData = function (data) {
        data.title && (this.title = data.title);
        data.message && (this.message = data.message);
        data.showTitle && (this.showTitle = this.showTitle);

        data.buttons && (this.buttons = data.buttons);
        this.buildViewData();

        //如果root没有创建这里需要
        if (!this.root) {
            this.root = this.createRoot();
        }
        this.setRootHtml(this.createHtml());
        this.loadButtons();
    };
    options.loadButtons = function () {
        // if (!this.root) this.create();
        var btnBox = this.root.find('.jui-roller-btns');
        var btus = this.createButtons();
        btnBox.empty();
        $.each(btus, function (k, v) {
            btnBox.append(v);
        });
    };
    options.createButtons = function () {
        var btns = [], isarr = _toString.call(this.buttons) === '[object Array]', i = 0;
        var scope = this;
        $.each(this.buttons, function (k, v) {
            var text = '', cls = [], click = function () { };
            if (isarr) {
                text = v.text;
                v.cls && cls.push(v.cls);
                v.type = v.type ? v.type : (text == '取消' ? STYLE_CANCEL : STYLE_CONFIRM);
                switch (v.type) {
                    case STYLE_CANCEL:
                        cls.push('jui-btns-cancel');
                        break;
                    case STYLE_CONFIRM:
                        cls.push('jui-btns-sure');
                        break;
                };
                v.click && (click = v.click);
            } else {
                text = k;
                typeof v === 'function' && (click = v);
            }
            btns[i] = $('<div class="jui-btns ' + cls.join(' ') + '">' + text + '</div>');
            btns[i].addClass(cls.join(' '));
            btns[i].bind('click', $.proxy(click, scope));
            i++;
        });
        return btns;
    };
    options.createHtml = function () {
        return mustache.to_html(this.tpl, this.viewdata).replace(/^\s*/mg, '')
    };

    var Alert = new cBase.Class(Layer, options);
    Alert.STYLE_CONFIRM = STYLE_CONFIRM;
    Alert.STYLE_CANCEL = STYLE_CANCEL;
    return Alert;

});