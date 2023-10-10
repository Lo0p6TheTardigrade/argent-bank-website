import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Signin from './pages/Signin';
import Landing from './pages/Landing';
import Error404 from './pages/Error404';
import { Provider } from 'react-redux';
import store from './index';
import { useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import Modal from 'react-modal';

const setModalRoot = () => {
  const rootElement = document.getElementById('root');
  Modal.setAppElement(rootElement);
};

function App() {
  const isLoggedIn = useSelector((state) => state.userReducer.isLoggedIn);
  useEffect(() => {
    setModalRoot();
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Provider store={store}>
          <Routes>
            <Route
              path="/home"
              element={<Home />}
            />
            <Route
              path="/"
              element={<Landing />}
            />
            <Route
              path="/login"
              element={<Signin />}
            />
            <Route
              path="*"
              element={<Error404 />}
            />
          </Routes>
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
