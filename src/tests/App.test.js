// import { render, screen } from '@testing-library/react';
import App from '../App';
import {getAllUsers, helloWorld} from "../api";

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('get data from api hello world', () => {
  // render(<App />);
  const response = helloWorld();
  expect(response).toBe('Hello')
  const a = 5
  }
);


test('get data from api list_all', () => {
  // render(<App />);
  const response = getAllUsers();
  
  expect(response).toBe('sdf')
  const a = 5
  }
);