define(['./ui/ui.mask', './ui/ui.alert', './ui/ui.toast', './ui/ui.loading', './ui/ui.imageSlider', './ui/ui.switch', './ui/ui.input.clear','./common/map', './common/set', './common/ajax'], function (cUIMask, cUIAlert, cUIToast, cUILoading, UIImageSlider, cUISwitch, cUIInputClear,  jMap, jSet, ajax) {
  require('./style/jam.css');
  jam = {
    cUIMask: cUIMask,
    cUIAlert: cUIAlert,
    cUIToast: cUIToast,
    cUILoading: cUILoading,
    UIImageSlider: UIImageSlider,
    cUISwitch: cUISwitch,
    cUIInputClear: cUIInputClear,
    jMap: jMap,
    jSet: jSet,
    ajax: ajax
  }
  window.jam = jam;
  // return jam;

})