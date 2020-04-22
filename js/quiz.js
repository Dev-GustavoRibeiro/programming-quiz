$('.start').click(StartQuiz);

let timer;
const pressStartCss = { 'background-color': 'rgb(65, 199, 125)', 'box-shadow': 'none', 'top': '154px' };

function StartQuiz() {
    $('.start').css(pressStartCss);
    $('.initial-instructions').fadeOut(500);
    $('[quiz-item]').each(function () {
        $(this).css('display', 'flex');
    });
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

const nextButtonCssBackup = { 'box-shadow': '0px 4px 0px 0px rgb(96, 59, 163)', 'top': '0px' };

$('.next-button').mousedown(NextQuestion).mouseup(function () {
    $(this).css(nextButtonCssBackup);
});

const pressNextCss = { 'box-shadow': 'none', 'top': '4px' };
const questions = [ '2. Which of these expressions is NOT a valid way to add 1 to a variable in JavaScript?', '3. Katherine is creating a computer program that will allow the cursor to jump to a different location when the mouse is clicked on a certain image. Which programming component should Katherine use to tell the program what to do when the mouse is clicked on the image?', '4. What is the only language that a computer can understand?', '5. Which term is used to describe expressions that result in the value of either true or false?' ];
const choices = [ ['x++', 'x = x+1', 'x += 1', 'x+'], ['a parameter', 'An event', 'A class', 'An event handler'], ['High-level', 'Machine', 'Application', 'Assembly'], ['Selection', 'Conditional', 'Boolean', 'Concatenation'] ];
let questionCounter = 2;
let validResponse = 0;

function NextQuestion() {
    $(this).css(pressNextCss);
    $('.question-number').html('<i class="far fa-dot-circle"></i>' + ' Question ' + questionCounter++);
    $('.question').hide().html(questions[questionCounter - 3]).fadeIn(500);
    if (questionCounter > 5) 
        $('.next-button').css('display', 'none');
    $('[option]').each(function(index) {
        $(this).hide().html(`<button response="${index + 1}" class="choice" onclick="ValidateResponse(${index + 1})"><i wrong="${index + 1}" class="fas fa-times"></i><i check="${index + 1}" class="fas fa-check"></i></button>` 
        + choices[questionCounter - 3][index]).fadeIn(500);
    });
    clearInterval(timer);
    timer = StartTimer();
    validResponse++;
}

const correctResponse = [3, 4, 4, 2, 3];

function ValidateResponse(response) {
    if (response === correctResponse[validResponse]) {
        MarkCorrectResponse(response);
    } else {
        MarkWrongResponse(response);
        MarkCorrectResponse(correctResponse[validResponse]);
    }
    if (questionCounter <= 5)
        setTimeout(NextQuestion, 1000);
}

function MarkCorrectResponse(response) {
    $(`[response="${response}"]`).css('background-color', 'rgb(93, 226, 165)');
    $(`[check="${response}"]`).show();
}

function MarkWrongResponse(response) {
    $(`[response="${response}"]`).css('background-color', 'rgb(241, 77, 118)');
    $(`[wrong="${response}"]`).show();
}