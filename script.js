let calculate = '';
let display = document.getElementById('quantityDisplay');
let buttons = document.querySelectorAll('.nomdiv button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        let value = button.innerText;
        if (value === '=') {
            calculate = eval(calculate);
            display.innerText = calculate;
        } else if (value === 'C') {
            calculate = '';
            display.innerText = '0';
        } else {
            calculate += value;
            display.innerText = calculate;
        }
    });
});