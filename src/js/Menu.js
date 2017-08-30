function Menu (spec) {
    let { root = '#menu',
          width = 320,
          height = window.innerHeight } = spec;
    let $el = $(root);
    let state = {
        expanded: false
    };
    const getState = _ => state;
    const init = _ => {
        console.log('Menu init');
        $el.removeClass('header').addClass('menu');
        $el.css({width: width, height: height, right: -width});
        $(document).on('menu:expand', expand);
        $(document).on('menu:collapse', collapse);
    };
    const expand = _ => {
        console.log('Menu expand');
        state.expanded = true;
        $el.slideRight(100,0);
    };
    const collapse = _ => {
        console.log('Menu collapse');
        state.expanded = false;
        $el.slideRight(100, - parseInt(width));
    };
    return Object.freeze({getState, init, expand, collapse});
}

export { Menu };
