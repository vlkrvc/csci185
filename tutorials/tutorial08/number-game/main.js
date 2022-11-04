// code that picks a random number between 1 and 100:
const secret = Math.floor(Math.random() * 99) + 1;
document.querySelector('#secret').innerHTML = secret;

let count = 0;




function check() {
    count++;
    document.querySelector('#num-guesses').innerHTML =
     'Number of guesses so far:' + count;



    // count = count + 1;
    // count += 1;
    
    // 1. get the number they've entered from the DOM.
    // store in  a variable.
    let guess = document.querySelector('#guess').value;
    console.log(guess);
    
    // 2. Conver the guess to a number.
    guess = Number(guess);
    // 3. Check if the won:
    //   * if guess === secret -> you win 
    //   * if guess < secret -> Too low!
    //   * otherwise: Too high!
    if (guess === secret) {
        console.log('You win!');
        document.querySelector('#message').innerHTML = 'You win!'
        document.querySelector('#celebrate').classList.remove('hide'); 
        //document.querySelector('#celebrate').className = ''
    } else if (guess < secret) {
        console.log('Too low!');
        document.querySelector('#message').innerHTML = 'Too low!'
        document.querySelector('#celebrate').className = 'hide'
    } else if (guess > secret) {
        console.log('Too high');
        document.querySelector('#message').innerHTML = 'Too high!'
        document.querySelector('#celebrate').className = 'hide'
    }



}