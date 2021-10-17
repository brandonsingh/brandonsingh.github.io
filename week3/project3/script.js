function randNum() {
    return Math.floor(Math.random() * 100) + 1;
  }
  

  const score = 10;
  let number = randNum();
  for (let i = 0; i < 3; i++) {

    let guess = prompt('guess a number between 1-100');
    if (i == 3) {
        console.log('YOU LOSE!');
    }
    if (number == guess) {
      console.log(number);
      console.log('YOU WIN');
      break;
    }else if (number > guess) {
      console.log(number);
      console.log('TOO LOW');
    }else if (number < guess) {
      console.log(number);
      console.log('TOO HIGH');
    }
  }
