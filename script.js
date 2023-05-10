'use strict';
//DOM va cah chon han tu
//Chon Id or class nhu CSS
/*console.log(document.querySelector('.message').textContent);
//Thay doi noi dung van ban
document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value = 10;
console.log(document.querySelector('.guess').value);
*/
//Phuong thuc addEventListener (doi so 1-ten event, doi so 2-ham)
//Hàm xử lý sự kiện – event handler function
//Tao bien ngau nhien cho so bi mat
let secretNumber = Math.trunc(Math.random() * 20) + 1;
//HIen thi so bi mat

//
let score = 20;
let highScore = 0;
//Tạo hàm cho .message
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
//
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // document.querySelector('.message').textContent = 'Correct number!';
  console.log(guess, typeof guess);
  //Tao dieu kien de hien khi empty
  //0 = falsy - !guess = true;
  if (!guess) {
    //No input
    displayMessage('Not a number!!');
    //When player wins
  } else if (guess === secretNumber) {
    displayMessage('You got it!!!!');
    //style. thuoc tinh (firstName)
    document.querySelector('.number').style.width = '25rem';
    // document.querySelector('.number').style.height = '30rem';
    document.querySelector('body').style.backgroundColor = '#940303';

    document.querySelector('.number').textContent = secretNumber;
    //Update highScore
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }

  //Guess wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   ;
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You have lost!');
      document.querySelector('.score').textContent = 0;
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing!');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
