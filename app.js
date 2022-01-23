window.onload = () => {
    const grid = document.querySelector('.grid');
    const masonry = new Masonry(grid, {
        itemSelector: '.grid-item',
        gutter: 20,
        // originLeft: false,
        // originTop: false,
    });

    let elem_s = document.querySelector('.grid');
    let infScroll = new InfiniteScroll( elem_s, {
        // options
        path: '/masonry/index-{{#}}.html',
        append: '.grid-item',
        outlayer: masonry,
        status: '.page-load-status'
        // history: false,
    });
}