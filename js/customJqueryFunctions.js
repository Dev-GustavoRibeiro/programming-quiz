$.fn.timer = function () {
    let timerSeconds = 30;
    const timer = setInterval(function () {
        $('.timer').html(timerSeconds-- + ' seconds');
        if (timerSeconds < 0)
            clearInterval(timer);
    }, 1000);
    return timer;
}