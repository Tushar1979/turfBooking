import { Route,BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from '../components/footer';
import Header from '../components/header';
import Home from '../pages/home';
import SigningIn, { SigningUp } from '../user/singin';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/singin" element={<SigningIn />} />
        <Route exact path="/singup" element={<SigningUp />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
