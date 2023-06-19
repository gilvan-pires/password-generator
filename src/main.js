import { nanoid } from 'nanoid';
import './style.css'; // É o vite que permite importar css dentro do js.

const pwBtnElmt = document.querySelector('button');
// console.log(pwBtnElmt);
const displayPwElmt = document.querySelector('h2');

pwBtnElmt.addEventListener('click', () => {
  const randomPw = nanoid();
  displayPwElmt.innerHTML = randomPw;
});
