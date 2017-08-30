function HoverIcon (spec) {
    let { root, selector } = spec;
    const $el = root;//? $(root) : selector;
    const $head = $el.find('.head');
    const $tail = $el.find('.tail');
    let state = {
        head: true,
    };
    const getState = _ => state;
    const init = _ => {
        $el.on('mouseover', tail);
        $el.on('mouseout', head);
    };
    const head = _ => {
        $tail.stop().hide(0);
        $head.stop().show(400);
        console.log('head');
    };
    const tail = _ => {
        $head.stop().hide(0);
        $tail.stop().show(400);
    };
    return Object.freeze({getState, init});
}

function HoverIconGroup (spec) {
    let { icons } = spec;
    const $icons = $(icons);
    let list = [];
    const getList = _ => list;
    const init = _ => {
        $icons.each(function () {
            let icon = $(this);
            let hoverIcon = HoverIcon({root: icon}).init();
            list.push(hoverIcon);
        });
    };
    const add = icon => list.push(HoverIcon({root: icon}).init());
    return Object.freeze({getList, init, add});
}

export { HoverIcon, HoverIconGroup }
