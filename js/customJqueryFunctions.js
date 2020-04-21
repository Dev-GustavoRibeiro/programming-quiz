$.fn.timer = function () {
    let timerSeconds = 30;
    const timer = setInterval(function () {
        $('.timer').html('<i class="far fa-clock"></i> ' + timerSeconds-- + ' seconds');
        if (timerSeconds < 0)
            clearInterval(timer);
    }, 1000);
    return timer;
}