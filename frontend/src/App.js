import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Signin from './pages/Signin';
import Landing from './pages/Landing';
import Error404 from './pages/Error404';
import { Provider } from 'react-redux';
import store from './index';
import { useSelector } from 'react-redux';

function App() {
  const isLoggedIn = useSelector((state) => state.userReducer.isLoggedIn);
  return (
    <div className="App">
      <BrowserRouter>
        <Provider store={store}>
          <Routes>
            {isLoggedIn ? (
              <Route
                path="/home"
                element={<Home />}
              />
            ) : (
              <Route
                path="/"
                element={<Landing />}
              />
            )}
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
