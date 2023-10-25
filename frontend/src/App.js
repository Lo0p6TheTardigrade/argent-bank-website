import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Signin from './pages/Signin';
import Landing from './pages/Landing';
import Error404 from './pages/Error404';
import { Provider, useSelector } from 'react-redux';
import store from './index';
import React, { useEffect } from 'react';
import Modal from 'react-modal';
import Profile from './pages/Profile';
import { Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setFirstName, setLastName, setLoggedIn, setUserName } from './actions/action';

const setModalRoot = () => {
  const rootElement = document.getElementById('root');
  Modal.setAppElement(rootElement);
};
function App() {
  const isLoggedIn = useSelector((state) => state.userReducer.isLoggedIn);
  const firstName = useSelector((state) => state.userReducer.firstName);
  const lastName = useSelector((state) => state.userReducer);
  const userName = useSelector((state) => state.userReducer.userName);
  useEffect(() => {
    setModalRoot();
    const userData = localStorage.getItem('user');

    if (userData) {
      const { firstName, lastName, userName } = JSON.parse(userData);
      dispatch(setFirstName(firstName));
      dispatch(setLastName(lastName));
      dispatch(setUserName(userName));
    }
  }, []);
  const dispatch = useDispatch();
  function whereToGo() {
    const userTokenCookie = document.cookie.includes('userToken');

    if (isLoggedIn && userTokenCookie) {
      dispatch(setLoggedIn(true));
      dispatch(setFirstName(firstName));
      dispatch(setLastName(lastName));
      dispatch(setUserName(userName));
      <Route
        path="/home"
        element={<Navigate to="/home" />}
      />;
    } else {
      <Route
        path="*"
        element={<Navigate to="/login" />}
      />;
    }
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Provider store={store}>
          <Routes>
            <Route
              path="/"
              element={<Landing />}
            />
            <Route
              path="/login"
              element={<Signin />}
            />
            {whereToGo ? (
              <>
                <Route
                  path="/home"
                  element={<Home />}
                />
                <Route
                  path="/profile"
                  element={<Profile />}
                />
              </>
            ) : (
              <Route
                path="*"
                element={<Navigate to="/login" />}
              />
            )}
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
