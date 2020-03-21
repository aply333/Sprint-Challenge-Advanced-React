import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {render} from '@testing-library/react';
import HeaderBar from './components/HeaderBar';
import Body from './components/Body';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('Header Renders', () =>{
  const { getByText } = render(<HeaderBar/>)
  expect(getByText(/sportsball players/i))
})

test("Checking if Body had data"), () => {
  const { getByText } = render (<Body/>)
  expect(getByText(/alex morgan/i))
}
