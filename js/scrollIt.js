(function($) {
    'use strict';

    var pluginName = 'ScrollIt',
        pluginVersion = '1.0.3';

    var defaults = {
        upKey: 38,
        downKey: 40,
        easing: 'linear',
        scrollTime: 600,
        activeClass: 'active',
        onPageChange: null,
        topOffset: 0
    };

    $.scrollIt = function(options) {
        var settings = $.extend({}, defaults, options), // Prevent modifying defaults
            active = 0,
            lastIndex = $('[data-scroll-index]').last().attr('data-scroll-index');

        var navigate = function(ndx) {
            if (ndx < 0 || ndx > lastIndex) return;

            var targetTop = $('[data-scroll-index=' + ndx + ']').offset().top + settings.topOffset + 1;
            $('html, body').animate({ scrollTop: targetTop }, settings.scrollTime, settings.easing);
        };

        var doScroll = function(e) {
            var target = $(e.target).closest("[data-scroll-nav]").attr('data-scroll-nav') ||
                         $(e.target).closest("[data-scroll-goto]").attr('data-scroll-goto');
            navigate(parseInt(target, 10));
        };

        var keyNavigation = function(e) {
            var key = e.which;

            // Prevent default behavior only when required
            if ((key == settings.upKey || key == settings.downKey) && $('html, body').is(':animated')) {
                e.preventDefault();
                return false;
            }

            if (key == settings.upKey && active > 0) {
                navigate(active - 1);
                e.preventDefault();
                return false;
            } else if (key == settings.downKey && active < lastIndex) {
                navigate(active + 1);
                e.preventDefault();
                return false;
            }

            return true;
        };

        var updateActive = function(ndx) {
            if (settings.onPageChange && ndx && active != ndx) settings.onPageChange(ndx);

            active = ndx;
            $('[data-scroll-nav]').removeClass(settings.activeClass);
            $('[data-scroll-nav=' + ndx + ']').addClass(settings.activeClass);
        };

        var watchActive = function() {
            var winTop = $(window).scrollTop();
            var visible = $('[data-scroll-index]').filter(function() {
                return winTop >= $(this).offset().top + settings.topOffset &&
                       winTop < $(this).offset().top + settings.topOffset + $(this).outerHeight();
            });

            var newActive = visible.first().attr('data-scroll-index') || 0; // Prevent undefined
            updateActive(newActive);
        };

        // Fix: Add passive: false to keydown event
        $(window).on('scroll', watchActive).scroll();
        $(window).on('keydown', keyNavigation, { passive: false });

        $(document).on('click', '[data-scroll-nav], [data-scroll-goto]', function(e) {
            e.preventDefault();
            doScroll(e);
        });
    };
}(jQuery));
