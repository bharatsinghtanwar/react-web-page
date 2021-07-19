import logo from './logo.svg';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Home from './Pages/index'
function App() {
  return (
    <Router>
      <Home />
    </Router>
  );
}

export default App;
