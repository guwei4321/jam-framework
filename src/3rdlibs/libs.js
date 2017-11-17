require.config({
  baseUrl: './',
  shim: {
    $: {
      exports: 'zepto'
    },
    _: {
      exports: '_'
    },
    M: {
      exports: 'mustache'
    },
    // B: {
    //   deps: [
    //     '_',
    //     '$'
    //   ],
    //   exports: 'Backbone'
    // },
    F:{
      deps: [
        '$'
      ],
      exports: 'Fastclick'
    },
    libs: {
      deps: [
        '_',
        '$',
        // 'B',
        'M'
      ],
      exports: 'libs'
    },
    common: {
      deps: [
        'libs'
      ]
    }
  },
  paths: {
    '$': '3rdlibs/zepto',
    '_': '3rdlibs/underscore',
    // 'B': '3rdlibs/backbone',
    'M': '3rdlibs/mustache',
    'F': '3rdlibs/fastclick',
    'libs': '3rdlibs/libs',
    'common': 'common'
  }
});

require(['$', '_','F', 'M'], function () {

});