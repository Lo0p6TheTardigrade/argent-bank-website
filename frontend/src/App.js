import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Signin from './pages/Signin';
import Landing from './pages/Landing';
import Error from './components/Error';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
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
            path="landing"
            element={<Landing />}
          />
          <Route
            path="*"
            element={<Error />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
