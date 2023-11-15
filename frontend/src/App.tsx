import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Sidebar from './components/Sidebar';
import Background from './components/Background';

function App() {

  return (
    <>
      {/* <Navbar /> */}
      <Background />
      <Sidebar />
      <Home />
    </>
  )
}

export default App;
