import React from 'react';
import ReactDOM, { render } from 'react-dom';

const root = document.getElementById('root');

const txt= React.createElement('h3', {}, "Please email me");
const email_me= React.createElement('a', {href: 'mailto:arthur@avalon.com'},txt);

// React DOM is a renderer for React that was split off from the main React library to better separate concerns; it handles rendering components to the DOM or to a string for server-side rendering.
ReactDOM.render(
  email_me,
  root
);