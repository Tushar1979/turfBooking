import { Route,BrowserRouter as Router, Routes } from 'react-router-dom';
import Header from '../components/header';
import Home from '../pages/home';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
