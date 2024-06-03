import _ from 'lodash';
import myName from './myName';

function component() {
    const element = document.createElement('div');
  
    // Lodash, currently included via a script, is required for this line to work
    element.textContent = myName("Rotem");
    return element;
  }
  
  document.body.appendChild(component());
  