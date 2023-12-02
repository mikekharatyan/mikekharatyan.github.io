const winContent = $("#winContent");
const questionsContent = $("#questionsContent");
const questionNumber = $("#questionNumber");
const questionText = $("#questionText");
const myVideo = $("#myVideo");
const akinatorImage = $("#akinatorImage");
const defaultImg = akinatorImage.attr("src");

let questionNow = 1;

let questions = [
    "Ваш персонаж существует в реальности?",
    "Есть ли кубики у вашего персонажа ?",
    "Ваш персонаж может сказать ( կարճ ասած ) со скоростью света ?",
    "Ваш персонаж сейчас монтирует ваши видео а вы смеётесь над ним ?",
    "Ваш персонаж может удалить ваш канал за все эти шутки?",
    "Ваш персонаж пригнул из машины когда вы включили не хорошую музыку ?",
    "Ваш персонаж из второго масива ?",
];

questionText.text(questions[0]);

function handleClickOnAnswer() {
    let rand = Math.floor(Math.random() * 8) + 1;
    akinatorImage.attr("src", "./assets/img/akinators/" + rand + ".webp");

    questionNow++;
    questionNumber.text(questionNow);

    if (questionNow > questions.length) {
        questionsContent.hide();
        winContent.show();
        akinatorImage.attr("src", defaultImg);

        myVideo.play();
    } else {
        questionText.text(questions[questionNow - 1]);
    }

    generate_left_bubble($(".bubble-left.bubble"), 1);
    generate_propose_bubble($(".bubble-standard.bubble"), 1);
    generate_right_bubble($(".bubble-right.bubble"), 1);
    generate_question_bubble($(".bubble-question.bubble"), 1);
    generate_propose_bubble($(".bubble-propose.bubble"), 1);
}
