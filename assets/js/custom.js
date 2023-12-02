$(window).on("load", function () {
    var $mouseX = 0,
        $mouseY = 0,
        $winHeight,
        $winWidth,
        $element,
        $posX,
        $posY;
    function parallax(e, element, baseX, baseY, layer) {
        var strength = 100;
        $mouseX = baseX + (e.pageX + $element.offset().left) / strength / layer;
        $mouseY = baseY + (e.pageY + $element.offset().top) / strength / layer;
        $element.css("transform", "translate3d(" + $mouseX + "px, " + $mouseY + "px, 0)");
        return false;
    }
    function start_position(target, baseX, baseY) {
        $winHeight = $(window).height();
        $winWidth = $(window).width();
        $element = $("#parallax-overlay ." + target);
        $posX = baseX + ($winWidth + $element.offset().left) / 100;
        $posY = baseY + ($winHeight + $element.offset().top) / 100;
        $element.css("transform", "translate3d(" + $posX + "px, " + $posY + "px, 0)");
        return false;
    }
    var par_elem = [];
    par_elem[0] = ["parallax-layer-1", 600, -120, 2];
    par_elem[1] = ["parallax-layer-2", 600, -100, 1];
    par_elem[2] = ["parallax-layer-3", 0, -40, 2];
    par_elem[3] = ["parallax-layer-4", -50, -25, 1];
    par_elem[4] = ["parallax-layer-5", 500, -50, 2];
    par_elem[5] = ["parallax-layer-6", 500, -100, 1];
    par_elem[6] = ["parallax-layer-7", 0, -40, 1];
    for (var i = 0; i < par_elem.length; i++) {
        start_position(par_elem[i][0], par_elem[i][1], par_elem[i][2] + 20);
    }
    $(document).mousemove(function (e) {
        var parallaxFunc = parallax;
        for (var i = 0; i < par_elem.length; i++) {
            $element = $("#parallax-overlay ." + par_elem[i][0]);
            if ($(window).width() > 1024) {
                $element.css({ display: "unset" });
                parallaxFunc(e, $element, par_elem[i][1], par_elem[i][2] + 20, par_elem[i][3]);
            } else {
                $element.css({ display: "none" });
            }
        }
    });
    function place_element(target, baseX, baseY, sizeWidth, placeFromLeft) {
        $("." + target).css("top", baseY);
        if (placeFromLeft) $("." + target).css("left", baseX);
        else $("." + target).css("right", baseX);
        $("." + target)
            .find("svg")
            .css("width", sizeWidth + "px");
        if (sizeWidth <= 10) sizeWidth = sizeWidth * 2;
        $("." + target).css("height", sizeWidth + "px");
        $("." + target).css("opacity", 0.8);
    }
    var rhombus_elem = [];
    rhombus_elem[0] = ["rhombus-layer-1", "12%", "-3.5%", 70, true];
    rhombus_elem[1] = ["rhombus-layer-2", "20%", "10%", 30, true];
    rhombus_elem[2] = ["rhombus-group.group-1", "8%", "18%", 50, true];
    rhombus_elem[3] = ["rhombus-layer-3", "0", "0", 15, true];
    rhombus_elem[4] = ["rhombus-layer-4", "0.3px", "-1px", 40, true];
    rhombus_elem[5] = ["rhombus-layer-5", "0", "0", 15, true];
    rhombus_elem[6] = ["rhombus-layer-6", "5%", "50%", 70, false];
    rhombus_elem[7] = ["rhombus-layer-7", "8%", "80%", 30, true];
    rhombus_elem[8] = ["rhombus-layer-8", "15%", "80%", 30, false];
    rhombus_elem[9] = ["rhombus-group.group-2", "13%", "70%", 50, true];
    rhombus_elem[10] = ["rhombus-layer-9", "0", "0", 15, true];
    rhombus_elem[11] = ["rhombus-layer-10", "0", "0", 10, true];
    rhombus_elem[12] = ["rhombus-layer-11", "0", "0", 15, true];
    rhombus_elem[13] = ["rhombus-group.group-3", "20%", "56%", 50, true];
    rhombus_elem[14] = ["rhombus-layer-12", "0", "0", 40, true];
    rhombus_elem[15] = ["rhombus-layer-13", "0.3px", "0", 15, false];
    rhombus_elem[16] = ["rhombus-group.group-4", "30%", "45%", 50, true];
    rhombus_elem[17] = ["rhombus-layer-14", "0", "0", 10, true];
    rhombus_elem[18] = ["rhombus-layer-15", "0", "0", 20, true];
    rhombus_elem[19] = ["rhombus-group.group-5", "20%", "10%", 50, false];
    rhombus_elem[20] = ["rhombus-layer-16", "0", "0", 8, true];
    rhombus_elem[21] = ["rhombus-layer-17", "0", "0", 18, true];
    rhombus_elem[22] = ["rhombus-group.group-6", "12%", "60%", 50, false];
    rhombus_elem[23] = ["rhombus-layer-18", "0.3px", "0", 20, false];
    rhombus_elem[24] = ["rhombus-layer-19", "0", "0", 42, true];
    rhombus_elem[25] = ["rhombus-group.group-7", "22%", "65%", 50, false];
    rhombus_elem[26] = ["rhombus-layer-20", "0", "0", 40, true];
    rhombus_elem[27] = ["rhombus-layer-21", "0.3px", "0", 15, false];
    rhombus_elem[28] = ["rhombus-group.group-8", "15%", "20%", 50, false];
    rhombus_elem[29] = ["rhombus-layer-22", "0", "0", 40, true];
    rhombus_elem[30] = ["rhombus-layer-23", "0", "0", 15, true];
    var rhombus =
        '<svg viewBox="0 0 12 12"><path class="rhombus" d="M5.9,1.2L0.7,6.5l5.2,5.4l5.2-5.4L5.9,1.2z" /></svg>';
    $(".parallax-overlay").each(function () {
        $(this).find(".rhombus:not(.rhombus-group)").append(rhombus);
        $.each(rhombus_elem, function (index, value) {
            place_element(value[0], value[1], value[2], value[3], value[4]);
        });
    });

    function generate_left_bubble(elem, clean) {
        if (clean == 1) {
            elem.children("svg").each(function () {
                $(this).remove();
            });
        }
        var p_width = elem.find("p").width() + 90;
        var p_height = elem.find("p").height() + 50;
        var arrow = p_width + 30;
        elem.prepend(
            '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="' +
                arrow +
                '" height="' +
                p_height +
                '"><polygon points="0,0 ' +
                p_width +
                ",0 " +
                p_width +
                ",20 " +
                arrow +
                ",20 " +
                (p_width + 15) +
                ",35 " +
                (p_width + 9) +
                ",42 " +
                (p_width + 3) +
                ",50 " +
                (p_width + 1) +
                ",55 " +
                p_width +
                ",60 " +
                p_width +
                "," +
                p_height +
                " 0," +
                p_height +
                '"></polygon></svg>'
        );
    }
    function generate_right_bubble(elem, clean) {
        if (clean == 1) {
            elem.children("svg").each(function () {
                $(this).remove();
            });
        }
        var p_width = elem.find("p").width() + 90;
        var p_height = elem.find("p").height() + 50;
        var arrow = p_width + 30;
        elem.prepend(
            '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="' +
                arrow +
                '" height="' +
                p_height +
                '"><polygon points="30,0 30,20 0,20 15,35 21,42 27,50 29,55 30,60 30,' +
                p_height +
                " " +
                arrow +
                "," +
                p_height +
                " " +
                arrow +
                ',0"></polygon></svg>'
        );
    }
    function generate_question_bubble(elem, clean) {
        if (clean == 1) {
            elem.children("svg").each(function () {
                $(this).remove();
            });
        }
        var p_width = elem.find(".question-number").width();
        var arrow = p_width + 30;
        var p_height = elem.find(".question-text").height() + 50;
        elem.prepend(
            '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="' +
                arrow +
                '" height="' +
                p_height +
                '"><polygon points="30,0 30,20 29,25 27,30 22,37 15,45 0,60 30,60 30,' +
                p_height +
                " 85," +
                p_height +
                ' 85,0"></polygon></svg>'
        );
    }
    function generate_propose_bubble(elem, clean) {
        if (clean == 1) {
            elem.children("svg").each(function () {
                $(this).remove();
            });
        }
        var p_width = elem.find("p").width() + 70;
        var p_height = elem.find("p").height() + 50;
        var arrow = p_width + 30;
        elem.prepend(
            '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="' +
                arrow +
                '" height="' +
                p_height +
                '"><polygon points="30,0 30,20 29,25 27,30 22,37 15,45 0,60 30,60 30,' +
                p_height +
                " " +
                arrow +
                "," +
                p_height +
                " " +
                arrow +
                ',0"></polygon></svg>'
        );
    }
    function generate_standard_bubble(elem, clean) {
        if (clean == 1) {
            elem.children("svg").each(function () {
                $(this).remove();
            });
        }
        var p_width = elem.find("p").width() + 70;
        var p_height = elem.find("p").height() + 50;
        var arrow = p_width + 30;
        elem.prepend(
            '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="' +
                arrow +
                '" height="' +
                p_height +
                '"><polygon points="30,0 30,20 29,25 27,30 22,37 15,45 0,60 30,60 30,' +
                p_height +
                " " +
                arrow +
                "," +
                p_height +
                " " +
                arrow +
                ',0"></polygon></svg>'
        );
    }
    generate_left_bubble($(".bubble-left.bubble"), 0);
    generate_right_bubble($(".bubble-right.bubble"), 0);
    generate_question_bubble($(".bubble-question.bubble"), 0);
    generate_propose_bubble($(".bubble-propose.bubble"), 0);
    generate_standard_bubble($(".bubble-standard.bubble"), 0);
    $(window).resize(function () {
        generate_left_bubble($(".bubble-left.bubble"), 1);
        generate_propose_bubble($(".bubble-standard.bubble"), 1);
        generate_right_bubble($(".bubble-right.bubble"), 1);
        generate_question_bubble($(".bubble-question.bubble"), 1);
        generate_propose_bubble($(".bubble-propose.bubble"), 1);
    });

    var checkHover = 0;

    var $mover = $(".selector.dialog-box div");
    var $speed = "normal";
    if ($(this).length > 0) {
        $mover.css({ top: "10px", width: "100%" });
    }
    $(".selector.dialog-box ul:not(.social-network) a").hover(
        function () {
            var thisWidth = $(this).outerWidth();
            var thisTopPos =
                $(this).offset().top - ($(this).parent().parent().parent().offset().top + 3);
            if (checkHover < 1) {
                $mover.css("top", thisTopPos);
                checkHover = checkHover + 1;
            }

            $(this).addClass("current");
            $mover.stop().animate({ opacity: 1, top: thisTopPos, width: thisWidth }, $speed);
        },
        function () {
            var $currentEl = $(".selector.dialog-box ul:not(.social-network) a.current"),
                currentWidth = $currentEl.outerWidth();
            $currentEl.removeClass("current");
            $mover.stop().animate({ opacity: 0, width: currentWidth }, $speed);
        }
    );
});

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
    "Ваш персонаж может сказать 'կարճ ասած' со скоростью света ?",
    "Ваш персонаж из второго масива ?",
    "Ваш персонаж сейчас монтирует ваши видео а вы смеётесь над ним ?",
    "Ваш персонаж может удалить ваш канал за все эти шутки?",
    "Ваш персонаж пригнул из машины когда вы включили плохую музыку ?",
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

        myVideo[0].play();
    } else {
        questionText.text(questions[questionNow - 1]);
    }

    $(window).trigger("resize");
}
