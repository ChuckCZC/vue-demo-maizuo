/**
 * Create by zechun.chen on 2016/12/22
 * 基础配置
 */

import FastClick from 'fastclick'

((doc, win) => {
  const docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = () => {
      let clientWidth = docEl.clientWidth;
      if (!clientWidth) return;
      docEl.style.fontSize = 16 * (clientWidth / 320) + 'px';
    };
  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
  //当dom加载完成时，或者 屏幕垂直、水平方向有改变进行html的根元素计算
})(document, window);


if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function() {
    FastClick.attach(document.body);
  }, false);
}
