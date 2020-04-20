const pressStartCss = {
    'background-color': 'rgb(65, 199, 125)',
    'box-shadow': 'none',
    'top': '154px'
}

$('.start').click(function () {
    $('.start').css(pressStartCss);
    $('.initial-instructions').fadeOut(500);
    $('[quiz-item]').each(function () {
        $(this).css('display', 'flex');
    });
    $().timer();
});