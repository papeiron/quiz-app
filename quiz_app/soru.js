function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
  this.soruMetni = soruMetni;
  this.cevapSecenekleri = cevapSecenekleri;
  this.dogruCevap = dogruCevap;

  // console.log(this);
}

Soru.prototype.cevabiKontrolEt = function (cevap) {
  return cevap === this.dogruCevap;
};

let sorular = [
  new Soru(
    'What is the capital of Northern Ireland?',
    { a: 'Nottingham', b: 'Belfast', c: 'Dublin', d: 'Edinburgh' },
    'b'
  ),
  new Soru(
    'Which country won the World Cup in 1994?',
    { a: 'Germany', b: 'England', c: 'France', d: 'Netherlands' },
    'c'
  ),
  new Soru(
    "To which music group does the song 'Money for Nothing' belong?",
    { a: 'Dire Straits', b: 'Led Zeppelin', c: 'Metallica', d: 'Cream' },
    'a'
  ),
  new Soru(
    'In which year did Mustafa Kemal Atatürk become the President?',
    { a: '1919', b: '1920', c: '1923', d: '1928' },
    'c'
  )
];
