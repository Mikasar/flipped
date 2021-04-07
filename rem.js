(function(win) {
  var doc = win.document;
  var docEl = doc.documentElement;
  var tid;

  function refreshRem() {
      var width = docEl.getBoundingClientRect().width;
      if (width > 1920) {
          docEl.style.fontSize = (12 * (width / 1920)) + 'px'
      } else if (width >= 1024 && width <= 1920) {
          docEl.style.fontSize = (16 * (width / 1920)) + 'px';
      } else {
          docEl.style.fontSize = (16 * (width / 320)) + 'px';
      }
      // console.log(docEl.style.fontSize + '/' + width)
  }
  win.addEventListener('resize', function() {
      clearTimeout(tid);
      tid = setTimeout(refreshRem, 0);
  }, false);
  win.addEventListener('pageshow', function(e) {
      if (e.persisted) {
          clearTimeout(tid);
          tid = setTimeout(refreshRem, 0);
      }
  }, false);
  refreshRem();
})(window);