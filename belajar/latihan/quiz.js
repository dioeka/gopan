(function () {
    var HIRAGANA = [
        { char: "あ", romaji: "a" }, { char: "い", romaji: "i" },
        { char: "う", romaji: "u" }, { char: "え", romaji: "e" },
        { char: "お", romaji: "o" }, { char: "か", romaji: "ka" },
        { char: "き", romaji: "ki" }, { char: "く", romaji: "ku" },
        { char: "け", romaji: "ke" }, { char: "こ", romaji: "ko" },
        { char: "さ", romaji: "sa" }, { char: "し", romaji: "shi" },
        { char: "す", romaji: "su" }, { char: "せ", romaji: "se" },
        { char: "そ", romaji: "so" }, { char: "た", romaji: "ta" },
        { char: "ち", romaji: "chi" }, { char: "つ", romaji: "tsu" },
        { char: "て", romaji: "te" }, { char: "と", romaji: "to" },
        { char: "な", romaji: "na" }, { char: "に", romaji: "ni" },
        { char: "ぬ", romaji: "nu" }, { char: "ね", romaji: "ne" },
        { char: "の", romaji: "no" }, { char: "は", romaji: "ha" },
        { char: "ひ", romaji: "hi" }, { char: "ふ", romaji: "fu" },
        { char: "へ", romaji: "he" }, { char: "ほ", romaji: "ho" },
        { char: "ま", romaji: "ma" }, { char: "み", romaji: "mi" },
        { char: "む", romaji: "mu" }, { char: "め", romaji: "me" },
        { char: "も", romaji: "mo" }, { char: "や", romaji: "ya" },
        { char: "ゆ", romaji: "yu" }, { char: "よ", romaji: "yo" },
        { char: "ら", romaji: "ra" }, { char: "り", romaji: "ri" },
        { char: "る", romaji: "ru" }, { char: "れ", romaji: "re" },
        { char: "ろ", romaji: "ro" }, { char: "わ", romaji: "wa" },
        { char: "を", romaji: "wo" }, { char: "ん", romaji: "n" }
    ];

    var KATAKANA = [
        { char: "ア", romaji: "a" }, { char: "イ", romaji: "i" },
        { char: "ウ", romaji: "u" }, { char: "エ", romaji: "e" },
        { char: "オ", romaji: "o" }, { char: "カ", romaji: "ka" },
        { char: "キ", romaji: "ki" }, { char: "ク", romaji: "ku" },
        { char: "ケ", romaji: "ke" }, { char: "コ", romaji: "ko" },
        { char: "サ", romaji: "sa" }, { char: "シ", romaji: "shi" },
        { char: "ス", romaji: "su" }, { char: "セ", romaji: "se" },
        { char: "ソ", romaji: "so" }, { char: "タ", romaji: "ta" },
        { char: "チ", romaji: "chi" }, { char: "ツ", romaji: "tsu" },
        { char: "テ", romaji: "te" }, { char: "ト", romaji: "to" },
        { char: "ナ", romaji: "na" }, { char: "ニ", romaji: "ni" },
        { char: "ヌ", romaji: "nu" }, { char: "ネ", romaji: "ne" },
        { char: "ノ", romaji: "no" }, { char: "ハ", romaji: "ha" },
        { char: "ヒ", romaji: "hi" }, { char: "フ", romaji: "fu" },
        { char: "ヘ", romaji: "he" }, { char: "ホ", romaji: "ho" },
        { char: "マ", romaji: "ma" }, { char: "ミ", romaji: "mi" },
        { char: "ム", romaji: "mu" }, { char: "メ", romaji: "me" },
        { char: "モ", romaji: "mo" }, { char: "ヤ", romaji: "ya" },
        { char: "ユ", romaji: "yu" }, { char: "ヨ", romaji: "yo" },
        { char: "ラ", romaji: "ra" }, { char: "リ", romaji: "ri" },
        { char: "ル", romaji: "ru" }, { char: "レ", romaji: "re" },
        { char: "ロ", romaji: "ro" }, { char: "ワ", romaji: "wa" },
        { char: "ヲ", romaji: "wo" }, { char: "ン", romaji: "n" }
    ];

    var ANGKA = [
        { char: "一", romaji: "ichi" }, { char: "二", romaji: "ni" },
        { char: "三", romaji: "san" }, { char: "四", romaji: "yon" },
        { char: "五", romaji: "go" }, { char: "六", romaji: "roku" },
        { char: "七", romaji: "nana" }, { char: "八", romaji: "hachi" },
        { char: "九", romaji: "kyuu" }, { char: "十", romaji: "juu" },
        { char: "百", romaji: "hyaku" }, { char: "千", romaji: "sen" }
    ];

    var KOSAKATA = [
        { char: "人", romaji: "hito" }, { char: "友達", romaji: "tomodachi" },
        { char: "先生", romaji: "sensei" }, { char: "学生", romaji: "gakusei" },
        { char: "食べる", romaji: "taberu" }, { char: "飲む", romaji: "nomu" },
        { char: "見る", romaji: "miru" }, { char: "行く", romaji: "iku" },
        { char: "おはよう", romaji: "ohayou" }, { char: "ありがとう", romaji: "arigatou" },
        { char: "すみません", romaji: "sumimasen" }, { char: "またね", romaji: "matane" }
    ];

    var TOTAL_QUESTIONS = 10;

    function shuffle(array) {
        var copy = array.slice();

        for (var i = copy.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = copy[i];
            copy[i] = copy[j];
            copy[j] = temp;
        }

        return copy;
    }

    function pickQuestions(pool) {
        return shuffle(pool).slice(0, TOTAL_QUESTIONS);
    }

    function buildChoices(correct, pool) {
        var distractors = pool
            .filter(function (item) {
                return item.romaji !== correct;
            })
            .map(function (item) {
                return item.romaji;
            });

        var unique = [];

        distractors.forEach(function (romaji) {
            if (unique.indexOf(romaji) === -1) {
                unique.push(romaji);
            }
        });

        var choices = shuffle(unique).slice(0, 3);
        choices.push(correct);

        return shuffle(choices);
    }

    function QuizApp(config) {
        this.pool = config.pool;
        this.questions = pickQuestions(this.pool);
        this.currentIndex = 0;
        this.score = 0;
        this.answered = false;

        this.quizSection = document.getElementById("quiz-section");
        this.resultSection = document.getElementById("result-section");
        this.questionNumber = document.getElementById("question-number");
        this.scoreDisplay = document.getElementById("score-display");
        this.questionChar = document.getElementById("question-char");
        this.choicesContainer = document.getElementById("choices");
        this.feedback = document.getElementById("feedback");
        this.nextButton = document.getElementById("next-button");
        this.finalScore = document.getElementById("final-score");
        this.resultMessage = document.getElementById("result-message");
        this.retryButton = document.getElementById("retry-button");

        this.nextButton.addEventListener("click", this.handleNext.bind(this));
        this.retryButton.addEventListener("click", this.restart.bind(this));

        this.renderQuestion();
    }

    QuizApp.prototype.renderQuestion = function () {
        var question = this.questions[this.currentIndex];
        var choices = buildChoices(question.romaji, this.pool);

        this.answered = false;
        this.questionNumber.textContent = "Soal " + (this.currentIndex + 1) + " / " + TOTAL_QUESTIONS;
        this.scoreDisplay.textContent = "Skor: " + this.score + " / " + TOTAL_QUESTIONS;
        this.questionChar.textContent = question.char;
        this.feedback.textContent = "";
        this.feedback.className = "feedback";
        this.nextButton.disabled = true;
        this.nextButton.textContent =
            this.currentIndex === TOTAL_QUESTIONS - 1 ? "Selesai →" : "Berikutnya →";
        this.nextButton.setAttribute(
            "aria-label",
            this.currentIndex === TOTAL_QUESTIONS - 1 ? "Selesaikan latihan" : "Lanjut ke pertanyaan berikutnya"
        );

        this.choicesContainer.innerHTML = "";

        choices.forEach(function (choice) {
            var button = document.createElement("button");
            button.type = "button";
            button.className = "choice-button";
            button.textContent = choice;
            button.addEventListener("click", function () {
                this.selectAnswer(button, choice, question.romaji);
            }.bind(this));
            this.choicesContainer.appendChild(button);
        }, this);
    };

    QuizApp.prototype.selectAnswer = function (button, selected, correct) {
        if (this.answered) {
            return;
        }

        this.answered = true;
        var isCorrect = selected === correct;
        var buttons = this.choicesContainer.querySelectorAll(".choice-button");

        buttons.forEach(function (btn) {
            btn.disabled = true;

            if (btn.textContent === correct) {
                btn.classList.add("correct");
            } else if (btn === button && !isCorrect) {
                btn.classList.add("wrong");
            }
        });

        if (isCorrect) {
            this.score += 1;
            this.feedback.textContent = "Benar! Bunyi " + this.questionChar.textContent + " adalah \"" + correct + "\".";
            this.feedback.classList.add("correct");
        } else {
            this.feedback.textContent = "Salah. Jawaban yang benar: \"" + correct + "\".";
            this.feedback.classList.add("wrong");
        }

        this.scoreDisplay.textContent = "Skor: " + this.score + " / " + TOTAL_QUESTIONS;
        this.nextButton.disabled = false;
    };

    QuizApp.prototype.handleNext = function () {
        if (this.currentIndex < TOTAL_QUESTIONS - 1) {
            this.currentIndex += 1;
            this.renderQuestion();
            return;
        }

        this.showResult();
    };

    QuizApp.prototype.showResult = function () {
        var percentage = Math.round((this.score / TOTAL_QUESTIONS) * 100);
        var message = "Terus latihan, kamu pasti bisa!";

        if (percentage >= 90) {
            message = "Luar biasa! Hafalanmu sangat baik.";
        } else if (percentage >= 70) {
            message = "Bagus! Sedikit lagi untuk sempurna.";
        } else if (percentage >= 50) {
            message = "Cukup baik, ulangi untuk hasil lebih baik.";
        }

        this.quizSection.hidden = true;
        this.resultSection.hidden = false;
        this.finalScore.textContent = this.score + " / " + TOTAL_QUESTIONS;
        this.resultMessage.textContent = message;
    };

    QuizApp.prototype.restart = function () {
        this.questions = pickQuestions(this.pool);
        this.currentIndex = 0;
        this.score = 0;
        this.quizSection.hidden = false;
        this.resultSection.hidden = true;
        this.renderQuestion();
    };

    document.addEventListener("DOMContentLoaded", function () {
        var quizType = document.body.dataset.quiz;
        var pools = {
            hiragana: HIRAGANA,
            katakana: KATAKANA,
            angka: ANGKA,
            kosakata: KOSAKATA
        };
        var pool = pools[quizType] || HIRAGANA;

        new QuizApp({ pool: pool });
    });
})();
