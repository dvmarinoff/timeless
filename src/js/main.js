// import '../scss/slick.css'
// import '../scss/slick-theme.css'
// import '../scss/main.css'

import './animate'
import { Loader } from './Loader'
import { Menu } from './Menu'
import { MenuBtn } from './MenuBtn'
import { Scroll } from './Scroll'
import { Fit } from './Slider'


'use strict';

var ui = {
    loader: Loader({root: '#loader-main-bg'}),
    menu: Menu({root: '#side-menu'}),
    menuBtn: MenuBtn({root: '#menu-btn'}),
    scroll: Scroll({root: ''}),
    sliderImages: Fit({root: '#slider'}),
};

function app (ui) {
    console.log('app running ...');
    ui.menuBtn.hide();
    ui.menuBtn.init();
    ui.sliderImages.init();

    $('#slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<div class="slick-prev"><img src="images/icon_left.svg" /></div>',
        nextArrow: '<div class="slick-next"><img src="images/icon_right.svg" /></div>'
    });
    // $('#front').css({height: window.outerHeight});
};
function onFirstScroll () {
    ui.menu.init();
    ui.menuBtn.show();
}

$(document).ready(function() {
    app(ui);
    console.log('CHANGE 3');
});

$(window).on('resize', function () {

});


$(window).on('load', function () {
    console.log('window');
    ui.loader.hide();
    ui.scroll.init();
});
