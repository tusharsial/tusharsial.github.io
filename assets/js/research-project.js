(function() {
  function attach() {
    document.querySelectorAll('.opt1-body').forEach(function(body) {
      if (body._spotInit) return;
      body._spotInit = true;
      body.addEventListener('mousemove', function(e) {
        var rect = body.getBoundingClientRect();
        var x = ((e.clientX - rect.left) / rect.width  * 100).toFixed(1) + '%';
        var y = ((e.clientY - rect.top)  / rect.height * 100).toFixed(1) + '%';
        body.style.setProperty('--mx', x);
        body.style.setProperty('--my', y);
      });
    });

    document.querySelectorAll('.pub-item').forEach(function(item) {
      if (item._spotInit) return;
      item._spotInit = true;
      item.addEventListener('mousemove', function(e) {
        var rect = item.getBoundingClientRect();
        var x = ((e.clientX - rect.left) / rect.width  * 100).toFixed(1) + '%';
        var y = ((e.clientY - rect.top)  / rect.height * 100).toFixed(1) + '%';
        item.style.setProperty('--mx', x);
        item.style.setProperty('--my', y);
      });
    });
  }
  document.addEventListener('DOMContentLoaded', attach);
  if (document.readyState !== 'loading') attach();
})();
