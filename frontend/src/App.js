import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Signin from './pages/Signin';
import Landing from './pages/Landing';

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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
