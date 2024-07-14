import React from 'react';

import Header from './components/Header';
import Container from './components/Container';
import AddForm from './components/AddForm';
import BookContainer from './components/Book/BookContainer';
import { Provider } from 'react-redux';
import { store } from './Redux/Store';

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <Container>
        <AddForm />
        <BookContainer />
      </Container>
    </Provider>
  );
};

export default App;
