function Loader (spec) {
    let { root = '#loader-main' } = spec;
    let $el = $(root);
    let state = {
        expanded: true
    };
    const getState = _ => state;
    const init = _ => { return true; };
    const show = _ => {
        $el.show(100);
        state.expanded = true;
    };
    const hide = _ => {
        $el.hide(400);
        state.expanded = false;
    };
    return Object.freeze({getState, init, show, hide});
}

export { Loader };
