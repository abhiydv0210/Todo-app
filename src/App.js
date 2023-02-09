
import './App.css';
import Buttons from './components/Buttons';
import Navbar from './components/Navbar';
import Title from './components/Title';

function App() {
  return (
    <div className="container">
      
      <div className='app-wrapper'>
      <Navbar/>
      <Title/>
      <Buttons/>
      </div>
    
      
    </div>
  );
}

export default App;
