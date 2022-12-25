/* References to HTML elements */
const memory = document.querySelector('#memory');
const input = document.querySelector('#input');
const delBtn = document.querySelector('#delete');
const clearBtn = document.querySelector('#clear');
const ac = document.querySelector('#ac');
let numbs = document.querySelectorAll('.num');
let ops = document.querySelectorAll('.op');
numbs = [...numbs];
ops = [...ops];

/* delete and clear function */
delBtn.addEventListener('click', () => {
  let inputNumbers = [...input.textContent];
  inputNumbers.pop();
  inputNumbers = inputNumbers.toString();
  inputNumbers = inputNumbers.replaceAll(',', '');
  input.textContent = inputNumbers;
  if (input.textContent === ''){
    input.textContent = '0';
  }
});

clearBtn.addEventListener('click', () => {
  input.textContent = '0';
});

ac.addEventListener('click', () => {
  input.textContent = '0';
  memory.textContent = '';
});


/* Show pressed button on the display input */
numbs.map(element => {
  element.addEventListener('click', () => {
    if (input.textContent !== '0'){
      input.textContent += element.textContent;
    }
    else {
      input.textContent = element.textContent;
    }
  });
});

ops.map(element => {
  element.addEventListener('click', () => {
    if (input.textContent !== '0' && element.textContent !== '='){
      if (memory.textContent === ''){
        memory.textContent = `${input.textContent} ${element.textContent} `; 
      }
      else {
        memory.textContent += `${input.textContent} ${element.textContent} `;
      }
      input.textContent = '0';
    }

  })
})

