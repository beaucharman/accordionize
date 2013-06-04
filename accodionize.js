/**
 * Accordionize
 * ========================================================================
 * accordionize()
 * @version 1.0 | May 14th 2013
 * @author  Beau Charman | @beaucharman | http://www.beaucharman.me
 * @link    https://github.com/beaucharman/accordionize
 * @license MIT license
 * @param   {object}  options
 *   @param {integer} speed
 *   @param {string}  active | active state selector
 * ======================================================================== */
;(function ($) {
  'use strict';

  $.fn.accordionize = function (options) {
    var settings = $.extend({
      'speed': 300,
      'active' : '[data-state="active"]'
    }, options);

    var toggleExpand = function ($this) {
      if (! $this.hasClass('open')) {
        $this
          .addClass('open')
          .next()
            .slideDown(settings.speed)
            .siblings('dd')
              .slideUp(settings.speed)
          .end()
          .siblings('dt')
            .removeClass('open');
      } else {
        $this
          .removeClass('open')
          .next()
            .slideUp(settings.speed)
          .end()
          .siblings('dt')
            .removeClass('open');
      }
    };

    /* Initialize */
    return this.each(function () {
      $(this)
        .find('dd')
          .hide()
        .end()
        .on('click', 'dt', function () {
          toggleExpand($(this));
        });

      $(settings.active).each(function () {
        $(this)
          .addClass('open')
          .next()
            .slideDown(settings.speed);
      });
    });
  };
})(jQuery);
