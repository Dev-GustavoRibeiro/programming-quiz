const pressStartCss = {
    'background-color': 'rgb(65, 199, 125)',
    'box-shadow': 'none',
    'top': '154px'
}

const pressNextCss = {
    'box-shadow': 'none',
    'top': '19px'
}

const nextButtonCssBackup = {
    'box-shadow': '0px 4px 0px 0px rgb(96, 59, 163)',
    'top': '15px'
}

$('.start').click(function() {
    $('.start').css(pressStartCss);
    $('.initial-instructions').fadeOut(500);   
    $('[quiz-item]').each(function() { 
        $(this).css('display', 'flex');
    });
});

$('.next-button').mousedown(function() {
    $(this).css(pressNextCss);
}).mouseup(function() {
    $(this).css(nextButtonCssBackup);
}); 