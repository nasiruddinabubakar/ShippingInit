import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom'
import renderer from 'react-test-renderer';
import { LoginData } from '../Modules/auth/LoginData';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../app/store';
import RegisterForm from '../Modules/auth/RegisterForm';
import { log } from 'console';




afterEach(()=>{
  cleanup();
})




test('should render LoginData component', () => {
  render(
    <BrowserRouter>
    <Provider store={store}>
      <LoginData />
      </Provider>
    </BrowserRouter>
  );
  const loginElement = screen.getByTestId('login');
  expect(loginElement).toBeInTheDocument();
  expect(loginElement).toHaveTextContent('Email Address');
  expect(loginElement).toHaveTextContent('Password');
  expect(loginElement).toContainHTML('input')
});

test('it should render RegisterData component', () => {
  render(
    <BrowserRouter>
    <Provider store={store}>
      <RegisterForm />
      </Provider>
    </BrowserRouter>
  );
  const registerElement = screen.getByTestId('register');
  expect(registerElement).toBeInTheDocument();
});

test('matches snapshot', () => {
  const tree = renderer.create(
    <BrowserRouter>
    <Provider store={store}>
      <LoginData />
      </Provider>
    </BrowserRouter>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});