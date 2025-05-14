let calculate = '';
let display = document.getElementById('quantityDisplay');
let buttons = document.querySelectorAll('.nomdiv button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        let value = button.innerText;
        if (value === '=') {
            calculate = eval(calculate);
            display.innerText = calculate;
            calculate = '';
        } else if (value === 'C') {
            calculate = '';
            display.innerText = '0';
        } else if (value === 'DEL') {
            calculate = calculate.slice(0, -1);
            if (calculate === '') {
                display.innerText = '0';
            } else {
                display.innerText = calculate;
            }
        } else if (value === 'CE') {
            let operator = 0;
            for (let i = 0; i < calculate.length; i++) {
                if (calculate[i] === '+' || calculate[i] === '-' || calculate[i] === '*' || calculate[i] === '/') {
                    operator++;
                }
            }
            if (operator === 0) {
                calculate = '';
                display.innerText = '0';
            }

            else if (operator === 1) {
                let lastOperator = false;
                if (calculate[calculate.length-1] === '+' || calculate[calculate.length-1] === '-' || calculate[calculate.length-1] === '*' || calculate[calculate.length-1] === '/') {
                    lastOperator = true;
                }
                if (lastOperator) {
                    calculate = '';
                    display.innerText = '0';    
                } else {
                    for (let i = calculate.length - 1; i >= 0; i--) {
                        if (calculate[i] === '+' || calculate[i] === '-' || calculate[i] === '*' || calculate[i] === '/') {
                            calculate = calculate.slice(0, i + 1);
                            break;
                        }
                    }
                    display.innerText = calculate;
                }
            }

            else {
                for (let i = calculate.length - 1; i >= 0; i--) {
                    if ((calculate[i] === '+' || calculate[i] === '-' || calculate[i] === '*' || calculate[i] === '/') && i !== calculate.length - 1) {
                        calculate = calculate.slice(0, i + 1);
                        break;
                    }
                }
                display.innerText = calculate;
            }
        } else {
            calculate += value;
            display.innerText = calculate;
        }
    });
});



