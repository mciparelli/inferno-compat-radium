import { render } from 'react-dom';
import { createElement as t } from 'react';
import Radium from 'radium';
import App from './app';

const root = document.createElement('div');
document.body.appendChild(root);

render(t(Radium(App)), root);
