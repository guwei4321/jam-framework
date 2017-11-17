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
        'cBase': app + 'common/c.base',
        'cAjax': app + 'common/c.ajax',
        'cLazyload': app + 'common/c.lazyload', //加载
        'cListAdapter': app + 'common/c.common.listadapter',
        'cGeoService': app + 'common/c.geo.service',
        'cGeoHelper': app + 'common/c.geo.helper',
        'cImgLazyload': app + 'common/c.img.lazyload',


        // util-----------------------------------------------------------
        'cUtilityHash': app + 'util/c.utility.hash',
        'cUtilityDate': app + 'util/c.utility.date', // Date对象，对时间提供一些常用方法
        'cUtilityServertime': app + 'util/c.utility.servertime',
        'cUtilityCrypt': app + 'util/c.utility.crypt',
        'cUtility': app + 'util/c.utility',
        'Validate': app + 'util/c.validate', //数据验证


        //-------------------------------------------------------------
        'cCoreInherit': app + 'core/c.core.inherit', // Class类，框架的基础类体系

        //-------------------------------------------------------------
        // Store
        'cAbstractStore': app + 'store/c.abstract.store', //抽象store
        'cAbstractStorage': app + 'store/c.abstract.storage', //抽象storage
        'cStore': app + 'store/c.local.store', //提供存取具体数据的Store基础类
        'cStorage': app + 'store/c.local.storage', //提供存取localStorage/sessionStorage的静态方法
        'cSessionStore': app + 'store/c.session.store', //提供存取具体数据的Store基础类
        'cSessionStorage': app + 'store/c.session.storage', //提供存取localStorage/sessionStorage的静态方法
        'memStore': app + 'store/c.memorystore',
        'CommonStore': app + 'store/c.common.store', //公用的store
        'PageStore': app + 'store/c.store.package',

        //-----------------------------------------------------------
        // UI组件
        'cUI': app + 'ui/c.ui',
        'cUICore': app + 'ui/c.ui.core',
        'cHistory': app + 'ui/c.ui.history',
        'cUIView': app + 'ui/c.ui.view',
        'cDataSource': app + 'ui/c.ui.datasource', //数据源
        'cUIBase': app + 'ui/c.ui.base',
        'cUIAbstractView': app + 'ui/c.ui.abstract.view',

        'cUIAlert': app + 'ui/c.ui.alert',
        'cUIAnimation': app + 'ui/c.ui.animation',
        'cUICitylist': app + 'ui/c.ui.citylist',
        'cUIHeadWarning': app + 'ui/c.ui.head.warning',
        'cUIInputClear': app + 'ui/c.ui.input.clear',
        'cUILayer': app + 'ui/c.ui.layer',

        'cUILayerList': app + 'ui/c.ui.layer.list',

        'cUILoading': app + 'ui/c.ui.loading',
        'cUILoadingLayer': app + 'ui/c.ui.loading.layer',
        'cUIMask': app + 'ui/c.ui.mask',
        'cUIToast': app + 'ui/c.ui.toast',
        'cUIWarning': app + 'ui/c.ui.warning',
        'cUIWarning404': app + 'ui/c.ui.warning404',
        'cUIHashObserve': app + 'ui/c.ui.hash.observe',
        'cUIEventListener': app + 'ui/c.ui.event.listener',
        'cUISwitch': app + 'ui/c.ui.switch',
        'cUINum': app + 'ui/c.ui.num',
        'cUITab': app + 'ui/c.ui.tab', //标签插件
        'cUIImageSlider': app + 'ui/c.ui.imageSlider',
        'cUISlider': app + 'ui/c.ui.slider',
        'cUIIdentitycard': app + 'ui/c.ui.identitycard'
    }

});
var arrayModule = [];
require(['cBase', 'cAjax'], function(cBase, cAjax) {
    // this.alert = new cUIAlert({
    //     showTitle: true,
    //     title: '头部',
    //     message: '内容',
    //     buttons: [{
    //         text: '内容',
    //         click: function () {
    //             this.hide();
    //         }
    //     }]
    // });
    // alert.show()

    // var scroolList = new cUIScrollRadio();
    // scroolList.show();
})
// })();