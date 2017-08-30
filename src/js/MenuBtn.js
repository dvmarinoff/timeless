function MenuBtn (spec) {
    let { root, visible = true } = spec;
    let $el = $(root);
    let $top = $el.find('.top');
    let $middle = $el.find('.middle');
    let $bottom = $el.find('.bottom');
    let state = {
        expanded: false,
        visible: visible,
    };
    const getState = _ => state;
    const init = _ => {
        $el.on('click', _ => onClick(state.expanded) );
    };
    const onClick = expanded => {
        console.log('MenuBtn expanded? ' + expanded);
        if(expanded) {
            return collapse();
        } else {
            return expand();
        }
    };
    const expand = _ => {
        $(document).trigger('menu:expand');
        burgerExpand();
        state.expanded = true;
        return true;
    };
    const collapse = _ => {
        $(document).trigger('menu:collapse');
        burgerCollapse();
        state.expanded = false;
        return false;
    };
    const burgerExpand = (duration = 100, middle = 9, angle = 45) => {
        $el.addClass('active');
        $top.top(duration, middle).rotateZ(duration, -angle);
        $middle.hide(duration);
        $bottom.top(duration, middle).rotateZ(duration, angle);
        return true;
    };
    const burgerCollapse = (duration = 100, middle = 9, angle = 45) => {
        $el.removeClass('active');
        $top.velocity({top: middle, rotateZ: '+='+angle+'deg'}, {duration: duration}).top(duration, 0);
        $middle.show(duration).velocity({top: middle,opacity: 1}, {duration: duration});
        $bottom.velocity({top: middle, rotateZ: '-='+angle+'deg'}, {duration: duration}).top(duration, 18);
        return false;
    };
    const show = _ => {
        $el.show(400);
        state.visible = true;
    };
    const hide = _ => {
        $el.hide(0);
        state.visible = false;
    };
    return Object.freeze({getState, init, expand, collapse, show, hide });
}

export { MenuBtn };
