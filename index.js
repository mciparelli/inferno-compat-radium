import { render } from 'react-dom';
import { createElement as t } from 'react';
import App from './app';

const root = document.createElement('div');
document.body.appendChild(root);

render(t(App), root);
