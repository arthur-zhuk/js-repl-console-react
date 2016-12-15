import React from 'react';
import ReactDOM from 'react-dom';
import REPLConsole from './REPLConsole';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<REPLConsole />, div);
});
