// Avoid `console` errors in browsers that lack a console.
(function() {
    var noop = function () {}; // No-operation function
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];

    var console = window.console = window.console || {};

    methods.forEach(function(method) {
        if (!console[method]) {
            console[method] = noop;
        }
    });
})();
