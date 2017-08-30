// function Slider (spec) {
//     let { root, slides } = spec;
//     let $el = $(root);
//     let $slides = $el.find(slides);
//     let $forward = $el.find('.forward');
//     let $back = $el.find('.back');
//     let state = {
//         list: [],
//         len: 0,
//         pos: 0,
//     };
//     const getState = _ => state;
//     const init => _ => {
//         $forward.on('click', forward);
//         $back.on('click', back);
//     };
//     const build = _ => {
//
//     };
//     const forward = _ => {
//
//     };
//     const backward = _ => {
//
//     };
//     return Object.freeze({getState, init});
// }
require('slick-carousel');

function Fit (spec) {
    let { root } = spec;
    let $el = $(root);
    const init = _ => {
        $('#slider .slide img').css({width: window.innerWidth / 4});
    };
    return Object.freeze({init});
}

export { Fit }
