function UI() {
  this.btn_start = document.querySelector('.btn-start');
  this.btn_next = document.querySelector('.btn-next');
  this.btn_replay = document.querySelector('.btn-replay');
  this.quiz_box = document.querySelector('.quiz-box');
  this.score_box = document.querySelector('.score_box');
  this.time_text = document.querySelector('.time-text');
  this.time_second = document.querySelector('.time-second');
  this.time_line = document.querySelector('.time_line');

  this.option_list = document.querySelector('.option_list');
}

UI.prototype.soruGoster = function (soru) {
  let question = `<span>${soru.soruMetni}</span>`;
  let options = '';

  ui.btn_next.classList.remove('show-button');

  for (let cevap in soru.cevapSecenekleri) {
    options += `
            <div class="option">
                <span><b>${cevap}</b>. ${soru.cevapSecenekleri[cevap]} </span>
                <div class="icon"><i></i></div>
            </div>
            `;
  }

  document.querySelector('.quiz-card-question').innerHTML = question;
  this.option_list.innerHTML = options;

  const option = this.option_list.querySelectorAll('.option');

  for (let opt of option) {
    opt.setAttribute('onclick', 'optionSelected(this)'); //   !!!!
  }
};

UI.prototype.numberofQuestion = function (soruSirasi, toplamSoru) {
  let tag = `<span class="question-span">${soruSirasi} / ${toplamSoru}</span>`;
  document.querySelector('.question-index').innerHTML = tag;
};

UI.prototype.skoruGoster = function (dogruCevap, toplamSoru) {
  let tag = `Correct Answer: ${dogruCevap} / ${toplamSoru}`;

  document.querySelector('.answered_correct_text').innerHTML = tag;
};
