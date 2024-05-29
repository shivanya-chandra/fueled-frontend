import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/login" Component={Home} />
          <Route path="/" exact Component={Home} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
