/**
 * @description 
 */
define(['cBase', 'cUI', 'cUtility', 'cView', 'cModel', 'cStore', 'cStorage', 'cAjax', 'CommonStore', 'cLazyload'],
    function (cBase, cUI, cUtility, cView, cModel, cStore, cStorage, cAjax, cCommonStore, lazyload) {

        var c = {
            base: cBase,
            ui: cUI,
            view: cView,
            utility: cUtility,
            store: cStore,
            storage: cStorage,
            model: cModel,
            ajax: cAjax,
            commonStore: cCommonStore,
            lazyload: lazyload
        };

        return c;

    });