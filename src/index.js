import React from 'react';
import ReactDOM, { render } from 'react-dom';

function Hello(props) {
  return <h3>Hello, {props.fullname}!</h3>;
}

const hello = <Hello fullname="Arthur W" />;

ReactDOM.render(
  hello,
  document.getElementById('root')
);

