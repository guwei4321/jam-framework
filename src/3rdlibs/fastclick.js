(function ($) {
  /***************************
  l_wang 提升点击响应速度
  *****************************/

  //需要用到的变量定义
  var trackingClick = false,
    trackingStart = 0, lastClickTime = 0, cancelNextClick = false, el = null, startX = 0, startY = 0, endX = 0, endY = 0, boundary = 4, isAndriond = navigator.userAgent.indexOf('Android') > 0, isIOS = /iP(ad|hone|od)/.test(navigator.userAgent), lastTouchIdentifier = 0, IOSWithBadTarget = isIOS && (/OS ([6-9]|\d{2})_\d/).test(navigator.userAgent);

  function onTouchStart(e) {
    if (e.targetTouches.length > 1) {
      return true;
    }

    //改变获取焦点位置，解决获取焦点难问题
    el = e.target;

    var no_el = $(el).closest('.nofastclick');
    if (no_el.length > 0) return true;

    if (isIOS) {
      var selection = window.getSelection();
      if (selection.rangeCount && !selection.isCollapsed) {
        return true;
      }
      if (e.targetTouches[0].identifier === lastTouchIdentifier) {
        event.preventDefault();
        return false;
      }
      lastTouchIdentifier = e.targetTouches[0].identifier;
    }

    trackingClick = true;
    trackingStart = e.timeStamp;
    startX = e.targetTouches[0].pageX;
    startY = e.targetTouches[0].pageY;

    //解决用户修改服务器时间问题
    if (e.timeStamp - lastClickTime < 0) lastClickTime = e.timeStamp;

    if (e.timeStamp - lastClickTime < 200) e.preventDefault();

    return true;
  }
  function onTouchMove(e) {
    if (!trackingClick) return true;
    endX = e.changedTouches[0].pageX;
    endY = e.changedTouches[0].pageY;

    if (Math.abs(endX - startX) > boundary || Math.abs(endY - startY) > boundary) {
      el = null;
      trackingClick = false;
    }
    return true; ;
  }

  function onTouchEnd(e) {
    if (!trackingClick) return true;

    if ((e.timeStamp - lastClickTime) < 200) { cancelNextClick = true; return true; }

    lastClickTime = e.timeStamp;
    trackingClick = false;
    var tagName = el.tagName.toLowerCase();
    if (tagName == 'label') {
      var forEl = findControl(el);
      if (forEl) {
        var _el = $(forEl);
        if (_el.attr('type') == 'checkbox' || _el.attr('type') == 'radio') {
          if (_el.attr('checked')) _el.removeAttr('checked');
          else _el.attr('checked', 'checked')
        } else {
          $(forEl).focus();
        }
        if (isAndriond) return false;
        el = forEl;
      }
    }

    else if (needFocus(el)) {
      if ((e.timeStamp - trackingStart) > 100) {
        el = null;
        return false;
      }
      //      if (IOSWithBadTarget) {
      //        //解决ios7点击问题，看着这个代码我真想打自己......
      //        el.blur();
      //      }

      var length;
      if (isIOS && el.setSelectionRange && el.type.indexOf('date') !== 0 && el.type !== 'time') {
        length = el.value.length;
        el.setSelectionRange(length, length);
      } else {
        el.focus();
      }

      if (tagName !== 'select') {
        el = null;
        e.preventDefault();
...
