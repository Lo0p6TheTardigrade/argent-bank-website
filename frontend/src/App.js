import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Signin from './pages/Signin';
import Landing from './pages/Landing';
import Error404 from './pages/Error404';
import { Provider } from 'react-redux';
import store from './index';

function App() {
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
              path="/signin"
              element={<Signin />}
            />
            <Route
              path="/"
              element={<Landing />}
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
