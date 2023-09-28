import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Signin from './pages/Signin';
import Landing from './pages/Landing';
import Error404 from './pages/Error404';
import { useState } from 'react';

function App() {
  const [isVisible] = useState(true);
  const [isVisible2] = useState(true);
  const [isVisible3] = useState(true);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/home"
            element={
              <Home
                isVisible={isVisible}
                isVisible2={isVisible2}
                isVisible3={isVisible3}
              />
            }
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
      </BrowserRouter>
    </div>
  );
}

export default App;
