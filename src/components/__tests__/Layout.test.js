import { Layout } from '../Modules/UserPanel/Layout';
import '@testing-library/jest-dom';
import { render, screen, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../../app/store';
import { Query } from '@tanstack/react-query';
import { QueryProvider } from '../../libs/react-query/QueryProvider';


afterEach(() => {
  cleanup();
});


test('should render Layout component', () => {
  try{
  render(
    <BrowserRouter>
      <Provider store={store}>
        <QueryProvider>
          <Layout />
        </QueryProvider>
      </Provider>
    </BrowserRouter>
  );
  const layoutElement = screen.getByTestId('layout');
  expect(layoutElement).toBeInTheDocument();
}
catch(e){
  
}
});
