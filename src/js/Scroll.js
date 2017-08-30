function Scroll (spec) {
    let { root = '' } = spec;
    let $el = $(root);
    let $logoTop = $('#logo-top');
    let $logoCenter = $('#logo-center');
    let $mainCont = $('#main-cont');
    let state = {
        top: true,
    };
    const getState = _ => state;
    const init = _ => {
        $(window).one('scroll resize', function () {
            down();
        });
    };
    const down = _ => {
        $logoTop.show(1000);
        $logoCenter.hide(1000);
        state.top = false;
        $(document).trigger('scroll:down');
        // $('#front').velocity({height: window.outerHeight / 2}, {duration: 1000});
    };
    const top = _ => {
        $logoTop.hide(1000);
        $logoCenter.show(1000);
        state.top = true;
        $(document).trigger('scroll:top');
    };
    return Object.freeze({getState, init, down, top});
}

export { Scroll }
