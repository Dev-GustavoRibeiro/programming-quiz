const pressStartCss = { 'background-color': 'rgb(65, 199, 125)', 'box-shadow': 'none', 'top': '154px' };
const pressNextCss = { 'box-shadow': 'none', 'top': '4px' };
const nextButtonCssBackup = { 'box-shadow': '0px 4px 0px 0px rgb(96, 59, 163)', 'top': '0px' };
const questions = ['2. Which of these expressions is NOT a valid way to add 1 to a variable in JavaScript?', '3. Katherine is creating a computer program that will allow the cursor to jump to a different location when the mouse is clicked on a certain image. Which programming component should Katherine use to tell the program what to do when the mouse is clicked on the image?', '4. What is the only language that a computer can understand?', '5. Which term is used to describe expressions that result in the value of either true or false?'];
const choices = [['x++', 'x = x+1', 'x += 1', 'x+'], ['a parameter', 'An event', 'A class', 'An event handler'], ['High-level', 'Machine', 'Application', 'Assembly'], ['Selection', 'Conditional', 'Boolean', 'Concatenation']];
const correctResponse = [3, 4, 4, 2, 3];
let timer, questionCounter = 2, validResponse = 0, punctuation = 0;

$('.start').click(StartQuiz);

function StartQuiz() {
    $('.start').css(pressStartCss);
    $('.initial-instructions').fadeOut(500);
    $('[quiz-item]').each(function () {
        $(this).css('display', 'flex');
    });
    timer = StartTimer();
}

function StartTimer() {
    let timerSeconds = 30;
    const timer = setInterval(function () {
        $('.timer').html('<i class="far fa-clock"></i> ' + timerSeconds-- + ' seconds');
        if (timerSeconds < 0) {
            if (questionCounter <= 5)
                NextQuestion();
            else 
                ShowFinalScreen();
            clearInterval(timer);
        }
    }, 1000);
    return timer;
}

$('.next-button').mousedown(NextQuestion).mouseup(function () {
    $(this).css(nextButtonCssBackup);
});

function NextQuestion() {
    $(this).css(pressNextCss);
    $('.question-number').html('<i class="far fa-dot-circle"></i>' + ' Question ' + questionCounter++);
    $('.question').hide().html(questions[questionCounter - 3]).fadeIn(500);
    if (questionCounter > 5)
        $('.next-button').css('display', 'none');
    $('[option]').each(function (index) {
        $(this).hide().html(`<button response="${index + 1}" class="choice" onclick="ValidateResponse(${index + 1})"><i wrong="${index + 1}" class="fas fa-times"></i><i check="${index + 1}" class="fas fa-check"></i></button>`
            + choices[questionCounter - 3][index]).fadeIn(500);
    });
    clearInterval(timer);
    timer = StartTimer();
    validResponse++;
}

function ValidateResponse(response) {
    if (response === correctResponse[validResponse]) {
        MarkCorrectResponse(response);
        punctuation++;
    } else {
        MarkWrongResponse(response);
        MarkCorrectResponse(correctResponse[validResponse]);
    }
    if (questionCounter <= 5) {
        setTimeout(NextQuestion, 1000);
    }
    else {
        clearInterval(timer);
        ShowFinalScreen();
    }
}

function MarkCorrectResponse(response) {
    $(`[response="${response}"]`).css('background-color', 'rgb(93, 226, 165)');
    $(`[check="${response}"]`).show();
}

function MarkWrongResponse(response) {
    $(`[response="${response}"]`).css('background-color', 'rgb(241, 77, 118)');
    $(`[wrong="${response}"]`).show();
}

function ShowFinalScreen() {
    $('.score').html(punctuation + '/5');
    if (punctuation === 5) {
        ColorTheMedal('gold');
        SetFinalMessage('Congratulations! You got all the questions right!');
    } else if (punctuation === 4) {
        ColorTheMedal('silver');
        SetFinalMessage('Nice job! You got it almost right!');
    } else if (punctuation === 3) {
        ColorTheMedal('rgb(205, 127, 50)');
        SetFinalMessage("You didn't do so well", "Devote yourself a little more to your studies and try again, ok?");
    } else if (punctuation === 2) {
        SetFinalMessage("I see that you're having a little trouble", "Study some more and try again");
    } else if (punctuation === 1) {
        SetFinalMessage('I see you are having difficulties', 'How about studying harder now and trying again another day?');
    } else {
        SetFinalMessage('You seem to be a beginner in the programming world', 'Study hard and try again in a few days');
    }

    $('.final-screen').fadeIn(500).css('display', 'flex');
}

function ColorTheMedal(color) {
    $('.fa-award').css('color', color).show();
} 

function SetFinalMessage(message1, message2 = '') {
    $('.final-message-part1').html(message1);
    $('.final-message-part2').html(message2);
}