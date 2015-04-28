/*!
 * Bootstrap v3.3.4 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

/*!
 * Generated using the Bootstrap Customizer (http://getbootstrap.com/customize/?id=be267e2a6c14ee409f5d)
 * Config saved to config.json and https://gist.github.com/be267e2a6c14ee409f5d
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(t){"use strict";var o=t.fn.jquery.split(" ")[0].split(".");if(o[0]<2&&o[1]<9||1==o[0]&&9==o[1]&&o[2]<1)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")}(jQuery),+function(t){"use strict";function o(o){o&&3===o.which||(t(n).remove(),t(a).each(function(){var e=t(this),n=r(e),a={relatedTarget:this};n.hasClass("open")&&(n.trigger(o=t.Event("hide.bs.dropdown",a)),o.isDefaultPrevented()||(e.attr("aria-expanded","false"),n.removeClass("open").trigger("hidden.bs.dropdown",a)))}))}function r(o){var r=o.attr("data-target");r||(r=o.attr("href"),r=r&&/#[A-Za-z]/.test(r)&&r.replace(/.*(?=#[^\s]*$)/,""));var e=r&&t(r);return e&&e.length?e:o.parent()}function e(o){return this.each(function(){var r=t(this),e=r.data("bs.dropdown");e||r.data("bs.dropdown",e=new i(this)),"string"==typeof o&&e[o].call(r)})}var n=".dropdown-backdrop",a='[data-toggle="dropdown"]',i=function(o){t(o).on("click.bs.dropdown",this.toggle)};i.VERSION="3.3.2",i.prototype.toggle=function(e){var n=t(this);if(!n.is(".disabled, :disabled")){var a=r(n),i=a.hasClass("open");if(o(),!i){"ontouchstart"in document.documentElement&&!a.closest(".navbar-nav").length&&t('<div class="dropdown-backdrop"/>').insertAfter(t(this)).on("click",o);var d={relatedTarget:this};if(a.trigger(e=t.Event("show.bs.dropdown",d)),e.isDefaultPrevented())return;n.trigger("focus").attr("aria-expanded","true"),a.toggleClass("open").trigger("shown.bs.dropdown",d)}return!1}},i.prototype.keydown=function(o){if(/(38|40|27|32)/.test(o.which)&&!/input|textarea/i.test(o.target.tagName)){var e=t(this);if(o.preventDefault(),o.stopPropagation(),!e.is(".disabled, :disabled")){var n=r(e),i=n.hasClass("open");if(!i&&27!=o.which||i&&27==o.which)return 27==o.which&&n.find(a).trigger("focus"),e.trigger("click");var d=" li:not(.disabled):visible a",s=n.find('[role="menu"]'+d+', [role="listbox"]'+d);if(s.length){var p=s.index(o.target);38==o.which&&p>0&&p--,40==o.which&&p<s.length-1&&p++,~p||(p=0),s.eq(p).trigger("focus")}}}};var d=t.fn.dropdown;t.fn.dropdown=e,t.fn.dropdown.Constructor=i,t.fn.dropdown.noConflict=function(){return t.fn.dropdown=d,this},t(document).on("click.bs.dropdown.data-api",o).on("click.bs.dropdown.data-api",".dropdown form",function(t){t.stopPropagation()}).on("click.bs.dropdown.data-api",a,i.prototype.toggle).on("keydown.bs.dropdown.data-api",a,i.prototype.keydown).on("keydown.bs.dropdown.data-api",'[role="menu"]',i.prototype.keydown).on("keydown.bs.dropdown.data-api",'[role="listbox"]',i.prototype.keydown)}(jQuery);