import _ from 'lodash';
import printMe from './print.js';
import './style.css';

export function test() {
    const element = document.createElement('div');
  
    const btn = document.createElement('button');

    // Lodash now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;
    element.appendChild(btn);
    
    return element;
  }
  
  document.body.appendChild(test());