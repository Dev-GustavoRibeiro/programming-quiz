const pressNextCss = {
    'box-shadow': 'none',
    'top': '19px'
}

const nextButtonCssBackup = {
    'box-shadow': '0px 4px 0px 0px rgb(96, 59, 163)',
    'top': '15px'
}

$('.next-button').mousedown(function () {
    $(this).css(pressNextCss);
    $().timer();
}).mouseup(function () {
    $(this).css(nextButtonCssBackup);
});