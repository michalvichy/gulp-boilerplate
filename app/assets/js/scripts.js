window.EZY = window.EZY || {};

window.EZY.common = function($) {
    var $window = $(window);
    var $body = $('body');

    console.log('Common file');
};

window.EZY = window.EZY || {};

window.EZY.home = function($) {
    var $window = $(window);
    var $body = $('body');
};

window.EZY = window.EZY || {};
window.EZY._submodules = window.EZY._submodules || {};

(function($) {

    $(function() {
        var bodyClassName = document.body.className.replace(/-/g, '_');
        var bodyClasses = bodyClassName.split(/\s+/);

        var getSubmodule = function(name) {
            return function() {
                window.EZY._submodules[name]($);
            };
        };

        $.each(['common'].concat(bodyClasses), function(i, module) {
            if ($.isFunction(window.EZY[module])) {
                window.EZY[module]($);
            }
        });
    });


}(jQuery));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9jb21tb24uanMiLCJfaG9tZS5qcyIsIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzY3JpcHRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsid2luZG93LkVaWSA9IHdpbmRvdy5FWlkgfHwge307XG5cbndpbmRvdy5FWlkuY29tbW9uID0gZnVuY3Rpb24oJCkge1xuICAgIHZhciAkd2luZG93ID0gJCh3aW5kb3cpO1xuICAgIHZhciAkYm9keSA9ICQoJ2JvZHknKTtcblxuICAgIGNvbnNvbGUubG9nKCdDb21tb24gZmlsZScpO1xufTtcbiIsIndpbmRvdy5FWlkgPSB3aW5kb3cuRVpZIHx8IHt9O1xuXG53aW5kb3cuRVpZLmhvbWUgPSBmdW5jdGlvbigkKSB7XG4gICAgdmFyICR3aW5kb3cgPSAkKHdpbmRvdyk7XG4gICAgdmFyICRib2R5ID0gJCgnYm9keScpO1xufTtcbiIsIndpbmRvdy5FWlkgPSB3aW5kb3cuRVpZIHx8IHt9O1xud2luZG93LkVaWS5fc3VibW9kdWxlcyA9IHdpbmRvdy5FWlkuX3N1Ym1vZHVsZXMgfHwge307XG5cbihmdW5jdGlvbigkKSB7XG5cbiAgICAkKGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgYm9keUNsYXNzTmFtZSA9IGRvY3VtZW50LmJvZHkuY2xhc3NOYW1lLnJlcGxhY2UoLy0vZywgJ18nKTtcbiAgICAgICAgdmFyIGJvZHlDbGFzc2VzID0gYm9keUNsYXNzTmFtZS5zcGxpdCgvXFxzKy8pO1xuXG4gICAgICAgIHZhciBnZXRTdWJtb2R1bGUgPSBmdW5jdGlvbihuYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgd2luZG93LkVaWS5fc3VibW9kdWxlc1tuYW1lXSgkKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG5cbiAgICAgICAgJC5lYWNoKFsnY29tbW9uJ10uY29uY2F0KGJvZHlDbGFzc2VzKSwgZnVuY3Rpb24oaSwgbW9kdWxlKSB7XG4gICAgICAgICAgICBpZiAoJC5pc0Z1bmN0aW9uKHdpbmRvdy5FWllbbW9kdWxlXSkpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuRVpZW21vZHVsZV0oJCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG5cbn0oalF1ZXJ5KSk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
