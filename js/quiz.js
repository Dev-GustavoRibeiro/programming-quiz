let timer;
const pressStartCss = { 'background-color': 'rgb(65, 199, 125)', 'box-shadow': 'none', 'top': '154px' };

$('.start').click(StartQuiz);

function StartQuiz() {
    $('.start').css(pressStartCss);
    $('.initial-instructions').fadeOut(500);
    $('[quiz-item]').each(function () {
        $(this).css('display', 'flex');
    });
    timer = StartTimer();
}


const pressNextCss = { 'box-shadow': 'none', 'top': '4px' };
const nextButtonCssBackup = { 'box-shadow': '0px 4px 0px 0px rgb(96, 59, 163)', 'top': '0px' };
const questions = [ '2. Which of these expressions is NOT a valid way to add 1 to a variable in JavaScript?', '3. Katherine is creating a computer program that will allow the cursor to jump to a different location when the mouse is clicked on a certain image. Which programming component should Katherine use to tell the program what to do when the mouse is clicked on the image?', '4. What is the only language that a computer can understand?', '5. Which term is used to describe expressions that result in the value of either true or false?' ];
const choices = [ ['x++', 'x = x+1', 'x += 1', 'x+'], ['a parameter', 'An event', 'A class', 'An event handler'], ['High-level', 'Machine', 'Application', 'Assembly'], ['Selection', 'Conditional', 'Boolean', 'Concatenation'] ];
const correctAnswers = ['undefined', 'x+', 'An event handler', 'Machine', 'Boolean'];

$('.next-button').mousedown(NextQuestion).mouseup(function () {
    $(this).css(nextButtonCssBackup);
});

let questionCounter = 2;

function NextQuestion() {
    $(this).css(pressNextCss);
    $('.question-number').html('<i class="far fa-dot-circle"></i>' + ' Question ' + questionCounter++);
    $('.question').hide().html(questions[questionCounter - 3]).fadeIn(500);
    if (questionCounter > 5) 
        $('.next-button').css('display', 'none');
    $('[option]').each(function(index) {
        $(this).hide().html('<button class="choice"></button>' + choices[questionCounter - 3][index]).fadeIn(500);
    });
    clearInterval(timer);
    timer = StartTimer();
}

function StartTimer () {
    let timerSeconds = 30;
    const timer = setInterval(function () {
        $('.timer').html('<i class="far fa-clock"></i> ' + timerSeconds-- + ' seconds');
        if (timerSeconds < 0) {
            if (questionCounter <= 5)
                NextQuestion();
            clearInterval(timer);
        }
    }, 1000);
    return timer;
}