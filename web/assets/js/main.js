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
