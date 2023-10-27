import logo from './logo.svg';
import './App.css';
import Intro from './splash-screens/Introduction/Intro';
import { useEffect, useState } from 'react';
import Nav from './components/Navigation/Nav';


function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [])
  return (
    <div>
      {loading ? <Intro /> : <Nav />}
    </div>
  );
}

export default App;
