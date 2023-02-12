const openButton = document.querySelector('#open-button');
const generateReasonButton = document.querySelector('#generate-reason-button');
const reasonText = document.querySelector('#reason');

openButton.addEventListener('click', () => {
  const card = document.querySelector('.card');
  card.style.transform = 'rotateY(180deg)';
  openButton.style.display = 'none';
  generateReasonButton.style.display = 'block';
});

generateReasonButton.addEventListener('click', () => {
  var reasons = [
    "you always make laugh",
    "you are my best friend",
    "you make me feel loved",
    "you have a great sense of humor",
    "you have a beautiful smile",
    "you make me feel happy and content",
    "you make me feel important and valued",
    "you are intelligent",
    "you make me feel safe and protected",
    "you are adventurous and always up for new experiences",
    "you are passionate about the things you love",
    "you are a hard worker and always give your best effort",
    "wala ganda ka lang",
    "you make me feel comfortable and at ease",
    "you are a great partner in life",
    "you are the love of my life",
    "ganda mu"
  ];
  var randomReason = reasons[Math.floor(Math.random() * reasons.length)];
  reasonText.textContent = randomReason;
});
