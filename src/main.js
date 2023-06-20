import './style.css'; // É o vite que permite importar css dentro do js.

import { nanoid } from 'nanoid';
import copy from 'clipboard-copy';

const pwBtnElmt = document.querySelector('button');
// console.log(pwBtnElmt);
const displayPwElmt = document.querySelector('h2');

pwBtnElmt.addEventListener('click', () => {
  const randomPw = nanoid();
  displayPwElmt.innerHTML = randomPw;
});

displayPwElmt.addEventListener('click', (event) => {
  copy(event.target.innerHTML);
  alert('Password copied!');
});
