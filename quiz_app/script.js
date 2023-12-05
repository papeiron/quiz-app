// let soru1 = new Soru(
//   'What is the capital of Northern Ireland?',
//   { a: 'Nottingham', b: 'Belfast', c: 'Dublin', d: 'Edinburgh' },
//   'b'
// );
// let soru2 = new Soru(
//   'Which country won the World Cup in 1994?',
//   { a: 'Germany', b: 'England', c: 'France', d: 'Netherlands' },
//   'c'
// );

const quiz = new Quiz(sorular);
const ui = new UI();

ui.btn_start.addEventListener('click', function () {
  ui.quiz_box.classList.add('active');
  startTimer(9);
  startTimerLine();
  ui.soruGoster(quiz.soruGetir());
  ui.numberofQuestion(quiz.soruIndex + 1, quiz.sorular.length);
});

ui.btn_next.addEventListener('click', function () {
  if (quiz.sorular.length != quiz.soruIndex + 1) {
    quiz.soruIndex += 1;

    clearInterval(counter);
    clearInterval(counter2);

    startTimer(10);
    startTimerLine();

    ui.soruGoster(quiz.soruGetir());
    ui.numberofQuestion(quiz.soruIndex + 1, quiz.sorular.length);
  } else {
    clearInterval(counter);
    clearInterval(counter2);
    ui.skoruGoster(quiz.dogruCevapSayisi, quiz.sorular.length);
    ui.score_box.classList.add('active');
    ui.quiz_box.classList.remove('active');
  }
});

// const option_list = document.querySelector(".option_list");

ui.btn_replay.addEventListener('click', function () {
  quiz.soruIndex = 0;
  quiz.dogruCevapSayisi = 0;

  ui.btn_start.click();
  ui.score_box.classList.remove('active');
});

function optionSelected(option) {
  clearInterval(counter);
  clearInterval(counter2);
  let cevap = option.querySelector('span b').textContent; //   !!!
  let soru = quiz.soruGetir();
  ui.time_second.classList.add('hide');

  if (soru.cevabiKontrolEt(cevap)) {
    option.classList.add('correct');
    option.children[1].classList.add('fas', 'fa-check');

    quiz.dogruCevapSayisi += 1;
  } else {
    option.classList.add('wrong');
    option.children[1].classList.add('fas', 'fa-times');
  }

  for (let i = 0; i < ui.option_list.children.length; i++) {
    ui.option_list.children[i].classList.add('disabled');
  }

  ui.btn_next.classList.add('show-button');
}

function startTimer(time) {
  ui.time_second.classList.remove('hide');

  counter = setInterval(timer, 1000);

  function timer() {
    if (time < 0) {
      clearInterval(counter);

      time = 10;
      ui.time_second.innerHTML = 'Time is over!';
      let cevap = quiz.soruGetir().dogruCevap;
      let x = ui.option_list.children;

      for (let option of x) {
        if (option.querySelector('span b').textContent == cevap) {
          option.classList.add('correct');
          option.children[1].classList.add('fas', 'fa-check');
          ui.time_second.classList.add('hide');
        }

        option.classList.add('disabled');
      }

      ui.btn_next.classList.add('show-button');
    }
    ui.time_second.textContent = time;
    time--;
  }
}

function startTimerLine() {
  let line_width = 0;

  counter2 = setInterval(timer, 20);

  function timer() {
    line_width += 1;
    ui.time_line.style.width = line_width + 'px';

    if (line_width > 498) {
      clearInterval(counter2);
    }
  }
}
