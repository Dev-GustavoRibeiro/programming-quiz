let timer;
const pressStartCss = { 'background-color': 'rgb(65, 199, 125)', 'box-shadow': 'none', 'top': '154px' };

$('.start').click(function () {
    $('.start').css(pressStartCss);
    $('.initial-instructions').fadeOut(500);
    $('[quiz-item]').each(function () {
        $(this).css('display', 'flex');
    });
    timer = $().timer();
});

const pressNextCss = { 'box-shadow': 'none', 'top': '19px' };
const nextButtonCssBackup = { 'box-shadow': '0px 4px 0px 0px rgb(96, 59, 163)', 'top': '15px' };
const questions = [
    '2. Which of these expressions is NOT a valid way to add 1 to a variable in JavaScript?',
    '3. Katherine is creating a computer program that will allow the cursor to jump to a different location when the mouse is clicked on a certain image. Which programming component should Katherine use to tell the program what to do when the mouse is clicked on the image?',
    '4. What is the only language that a computer can understand?',
    '5. Which term is used to describe expressions that result in the value of either true or false?'
]
let questionCounter = 2;

$('.next-button').mousedown(function () {
    $(this).css(pressNextCss);
    $('.question-number').html('Question ' + questionCounter++);
    clearInterval(timer);
    timer = $().timer();
}).mouseup(function () {
    $(this).css(nextButtonCssBackup);
});