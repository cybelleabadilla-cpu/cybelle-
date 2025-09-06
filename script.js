let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName("buttons"));

buttons.map(button => {
  button.addEventListener('click', (e) => {
    switch (e.target.innerText) {
      case 'Clear':
        display.innerText = '';
        break;

      case '←':
        if (display.innerText) {
          display.innerText = display.innerText.slice(0, -1);
        }
        break;

      case '=':
        try {
          let result = eval(display.innerText);

          if (result === 3) {
            display.innerText = 'miss ko na siya';
          } else {
            display.innerText = result;
          }
        } catch {
          display.innerText = 'Error';
        }
        break;

      default:
        display.innerText += e.target.innerText;
    }
  });
});
