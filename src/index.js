import _ from 'lodash';
import getText1 from './module_not_using_lodash';
import getText2 from './module_that_uses_lodash';

function component() {
  const element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ') + getText1() + getText2();

  return element;
}

document.body.appendChild(component());
