
(function() {
    var handlers = {
        load: function() {
            // Remove "loading" class once the page has fully loaded.
            document.body.className = '';
        },
        touchmove: function() {
            // Prevent scrolling on touch.
            return false;
        },
        orientationchange: function() {
            // Fix scroll position on orientation change.
            document.body.scrollTop = 0;
        }
    };

    for (var type in handlers)
        window.addEventListener(type, handlers[type], false);
})();



$(function() {
  var d = new Date();
  $("#credits").html("(C) " + d.getFullYear());
});

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-94086148-1', 'auto');
ga('send', 'pageview');
