import _ from 'lodash';
import './style.css';
import './index.html';

function component() {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = 'Hello from index.js';
  element.classList.add('hello');

  return element;
}
  
document.body.appendChild(component());

if (module.hot) {
  module.hot.accept('./index.js', function() {
    console.log('Accepting the updated index.js module!');
  })
}
