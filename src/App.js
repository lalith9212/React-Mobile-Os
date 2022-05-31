import logo from './logo.svg';
import './App.css';
import Lists from './components/Mobilelist';
import Mobile from './components/Mobileoperating';
import Manufacture from './components/Manufacturers';
import Company from './components/Company';

function App() {
  return (
    <div className="App">
    <Mobile></Mobile>
    <Lists></Lists>
    <Manufacture></Manufacture>
    <Company></Company>
    </div>
  );
}

export default App;
