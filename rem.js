var fun = function (doc, win) {
  var docEl = doc.documentElement,
      resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
      recalc = function () {
          var clientWidth = docEl.clientWidth;
          if (!clientWidth) return;
          // 这里是假设在750px宽度设计稿的情况下，1rem = 100px；
          // 可以根据实际需要修改 
          // 1920 响应的最大屏幕
          docEl.style.fontSize = (clientWidth / 1440) * 100 + 'px';
      };
  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
}
fun(document, window);
window.onresize = function () {
  fun(document, window);
}