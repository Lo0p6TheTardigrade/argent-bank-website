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
import { setFirstName, setLastName, setUserName } from './actions/action';

const setModalRoot = () => {
  const rootElement = document.getElementById('root');
  Modal.setAppElement(rootElement);
};

function App() {
  const isLoggedIn = useSelector((state) => state.userReducer.isLoggedIn);
  const firstName = useSelector((state) => state.userReducer.firstName);
  const lastName = useSelector((state) => state.userReducer.lastName);
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

  const userTokenCookieExist = document.cookie.includes('userToken');

  const isAuthorized = isLoggedIn || userTokenCookieExist;

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
            {isAuthorized ? (
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
