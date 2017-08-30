// var $ = require('jquery');
// window.jQuery = window.$ = $;
// delete window.jQuery;
// delete window.$;
require('velocity-animate');

$.fn.show = function (duration) {
    return $(this).velocity({opacity: 1}, {display: 'block', duration: duration});
};
$.fn.hide = function (duration) {
    return $(this).velocity({opacity: 0}, {display: 'none', duration: duration});
};
$.fn.slideLeft = function (duration, left) {
    return $(this).velocity({left: left}, {duration: duration});
};
$.fn.slideRight = function (duration, right) {
    return $(this).velocity({right: right}, {duration: duration});
};
$.fn.top = function (duration, top, async) {
    return $(this).velocity({top: top}, {duration: duration});
};
$.fn.rotateZ = function (duration, angle) {
    return $(this).velocity({rotateZ: angle+'deg'}, {duration: duration});
};
$.fn.topRotateZ = function (duration, top, angle) {
    return $(this).velocity({top: top, rotateZ: angle+'deg'}, {duration: duration});
};
$.fn.ratio = function (ratio) {
    var height = $(this).width() * ratio;
    return $(this).height(height);
};
