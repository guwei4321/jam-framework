// (function () {

//   var protocol = document.location.protocol;
//   if (protocol != "https:") protocol = "http:";
//   var app = protocol + '//webresource.c-ctrip.com/code/lizard/1.1/web/';
//  if (document.location.href.indexOf('localhost') > 0 || document.location.href.indexOf('172') > 0) app = 'http://172.16.140.104:5389//webapp/app/';
var app = './';
require.config({
    baseUrl: '',
    shim: {
        _: {
            exports: '_'
        },
        // B: {
        //     deps: [
        //         '_'
        //     ],
        //     exports: 'Backbone'
        // },
        M: {
            exports: 'mustache'
        },
        cBase: {
            exports: 'cBase'
        },
        cAjax: {
            exports: 'cAjax'
        },
        cView: {
            deps: [
                'B'
            ],
            exports: 'cView'
        }
    },
    paths: {

        'libs': app + '3rdlibs/libs',


        // ---------------------------------------------------
        // common 基础库
        'c': app + 'common/c',
        'cBase': app + 'common/base',
        'jAjax': app + 'common/ajax',
        'jMap': app + 'common/map',
        'jSet': app + 'common/set',
        'cLazyload': app + 'common/lazyload', //加载
        'cListAdapter': app + 'common/common.listadapter',
        'cGeoService': app + 'common/geo.service',
        'cGeoHelper': app + 'common/geo.helper',
        'cImgLazyload': app + 'common/img.lazyload',


        // util-----------------------------------------------------------
        'cUtilityHash': app + 'util/utility.hash',
        'cUtilityDate': app + 'util/utility.date', // Date对象，对时间提供一些常用方法
        'cUtilityServertime': app + 'util/utility.servertime',
        'cUtilityCrypt': app + 'util/utility.crypt',
        'cUtility': app + 'util/utility',
        'Validate': app + 'util/validate', //数据验证


        //-------------------------------------------------------------
        'cCoreInherit': app + 'core/core.inherit', // Class类，框架的基础类体系

        //-------------------------------------------------------------
        // Store
        'cAbstractStore': app + 'store/abstract.store', //抽象store
        'cAbstractStorage': app + 'store/abstract.storage', //抽象storage
        'cStore': app + 'store/local.store', //提供存取具体数据的Store基础类
        'cStorage': app + 'store/local.storage', //提供存取localStorage/sessionStorage的静态方法
        'cSessionStore': app + 'store/session.store', //提供存取具体数据的Store基础类
        'cSessionStorage': app + 'store/session.storage', //提供存取localStorage/sessionStorage的静态方法
        'memStore': app + 'store/memorystore',
        'CommonStore': app + 'store/common.store', //公用的store
        'PageStore': app + 'store/store.package',

        //-----------------------------------------------------------
        // UI组件
        'cUI': app + 'ui/ui',
        'cUICore': app + 'ui/ui.core',
        'cUIView': app + 'ui/ui.view',
        'cUIBase': app + 'ui/ui.base',
        'cUIAbstractView': app + 'ui/ui.abstract.view',

        'cUIAlert': app + 'ui/ui.alert',
        'cUICitylist': app + 'ui/ui.citylist',
        'cUIInputClear': app + 'ui/ui.input.clear',
        'cUILayer': app + 'ui/ui.layer',


        'cUILoading': app + 'ui/ui.loading',
        'cUIMask': app + 'ui/ui.mask',
        'cUIToast': app + 'ui/ui.toast',
        'cUIEventListener': app + 'ui/ui.event.listener',
        'cUISwitch': app + 'ui/ui.switch',
        'cUINum': app + 'ui/ui.num',
        'cUITab': app + 'ui/ui.tab', //标签插件
        'cUIImageSlider': app + 'ui/ui.imageSlider',
        'cUISlider': app + 'ui/ui.slider',
        'cUiAutoTextArea': app + 'ui/ui.autoTextArea' // autoSize
    }

});
var arrayModule = [];
require(['cUIMask', 'cUIAlert', 'cUIToast', 'cUILoading', 'cUIImageSlider', 'cUISwitch', 'cUIInputClear', 'cUiAutoTextArea', 'jMap', 'jSet'], function (cUIMask, cUIAlert, cUIToast, cUILoading, UIImageSlider, cUISwitch, cUIInputClear, cUiAutoTextArea, jMap, jSet) {
    const items = new jSet([1, 2, 3, 4, 5]);
    console.log(items)
    // console.log(items.keys())
    // console.log()
    // for (let item of items.values()) console.log(item);
    // console.log(items.forEach())
    var sMap = new jMap([
        ['name', '张三'],
        ['title', 'Author']
    ]);
    sMap.set(1, 'aaa')
    sMap.set(1, 'bbb')
    sMap.set(['a'],222);
    console.log(sMap)
    var autoSizeInput = new cUiAutoTextArea({
        nodes: $('textarea')
    });
    console.log(autoSizeInput)
    var data = [
        { id: 1, src: 'imagesDEMO/slider-1.jpg', href: './res/img/1.jpg' },
        { id: 2, src: 'imagesDEMO/slider-2.jpg', href: './res/img/2.jpg' },
        { id: 3, src: 'imagesDEMO/slider-3.jpg', href: './res/img/3.jpg' },
        { id: 4, src: 'imagesDEMO/slider-4.jpg', href: './res/img/4.jpg' }
    ];
    new cUIInputClear($('.input-text'));
    new cUISwitch({
        checked: true,
        rootBox: $('.switch-wrap')
    });
    new cUISwitch({
        checked: false,
        rootBox: $('.switch-wrap')
    });
    // var data = [
    //     { id: 1 },
    //     { id: 2 },
    //     { id: 3 },
    //     { id: 4 }
    // ];
    var imgSlider02 = new UIImageSlider({
        images: data,
        autoPlay: true,
        loop: true,
        imageSize: {
            width: '360px',
            height: '202px'
        },
        showArrows: true,
        showNav: true,
        // datamodel: {
            // data: data,
        //     itemFn: function (item) {
        //         return '<img data-src="' + item.src + '" src="' + item.src + '">';
        //     }
        // },
        // createNav: function () {
        //     if (this.sliderNav) return;
        //     var nav = '<div class="cui-navContainer cui-slide-nav-new" style="background: #f2f2f2; color: rgb(20, 145, 197); position: absolute;  bottom: 0;">';
        //     for (var i = 0; i < this.itemNum; i++) {
        //         nav += '<span class="cui-slide-nav-item" data-index="' + i + '"></span>';
        //     }
        //     nav += '</div>';
        //     this.sliderNav = $(nav);
        //     this.sliderNav.find('span').width(this.wrapper.width() / this.itemNum - 1);
        //     this.$el.append(this.sliderNav);
        //     this.setzIndexTop(this.sliderNav);
        //     this._setNavIndex(this.datamodel.index);
        // },
        container: $('.demo02')
    });
    imgSlider02.play();

    // var mask = new cUIMask({
    //     classNames: ['opacitymask']
    // });

    // mask.show();

    var alert = new cUIAlert({
        showTitle: true,
        title: '头部',
        message: '内容',
        needMask: true,
        needMaskHide: true,
        disableScroll: false,
        buttons: [
            {
                text: '确定',
                click: function () {
                    this.hide();
                }
            },
            {
                type: 'cancel',
                text: '取消',
                click: function () {
                    this.hide();
                }
            }
        ]
    });
    console.log(alert)
    var alert1 = new cUIAlert({
        showTitle: true,
        title: '头部1',
        message: '内容1',
        needMask: true,
        needMaskHide: true,
        disableScroll: false,
        prefix: 'xxx-',
        buttons: [
            {
                text: '确定1',
                click: function () {
                    this.hide();
                }
            },
            {
                type: 'cancel',
                text: '取1消',
                click: function () {
                    this.hide();
                }
            }
        ]
    });
    // alert.show()

    var loading = new cUILoading({
        rootBox : $('#loading-wrap'),
        backgroundColor: 'rgba(0, 255, 153, .6)'
    })
    // loading.show();

    // var pp = new cUIWarning({
    //     warningtitle: 'hi'
    // });
    // pp.show();

    // var warHead = new cUIWarning({
    //     warningtitle : '123',
    //     needMask: true
    // })
    // warHead.show();
    // var scroolList = new cUIScrollRadio();
    // scroolList.show();
    var toast = new cUIToast({
        title: '带蒙版，点击蒙版不关闭，3秒关闭',
        disableScroll: true,
        sleep: 3,
        needMaskHide: false,
        // prefix: 'xxxx-',
        delayCallback: function(){
            console.log('关闭')
        }
    });
    $('#button0').on('click', function(){
        loading.show(function () {
        });
        // toast.hide(function (){
        //     console.log(12312)
        // })
    })
    $('#button1').on('click', function () {
        toast.show();
    })
    $('#button2').on('click', function () {
        alert.show();
    })

    // toast.hide(function () {
    //     console.log(11312)
    // });
})
// })();