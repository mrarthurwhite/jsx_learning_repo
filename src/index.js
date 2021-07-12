import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Arthur',
  lastName: 'White'
};
const user1 =""; // without assignment react gives an error of user1 being undefined

function getGreeting(user) {
  if (user) {
    return <>Greetings, {formatName(user)}!</>;
  }
  return <>Greetings, Stranger</>;
}

const element = (
  <h1>
    Hello, {getGreeting(user1)}!
  </h1>
);

// React DOM is a renderer for React that was split off from the main React library to better separate concerns; it handles rendering components to the DOM or to a string for server-side rendering.
ReactDOM.render(
  element,
  document.getElementById('root')
);


