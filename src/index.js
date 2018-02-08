define(['./ui/ui.mask', './ui/ui.alert', './ui/ui.toast', './ui/ui.loading', './ui/ui.imageSlider', './ui/ui.switch', './ui/ui.input.clear','./common/map', './common/set', './common/ajax', './util/validate', './util/utility', './util/utility.servertime', './util/utility.date', './util/utility.hash'], function (cUIMask, cUIAlert, cUIToast, cUILoading, UIImageSlider, cUISwitch, cUIInputClear,  jMap, jSet, ajax, validate, utility, servertime, date, hash) {
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
    ajax: ajax,
    validate: validate,
    utility: utility,
    servertime: servertime,
    date: date,
    hash: hash
  }
  window.jam = jam;
  // return jam;

})