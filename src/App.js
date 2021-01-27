import logo from './logo.svg';
import './App.css';
import Activite1 from './Activite1'
import Activite2 from './Activite2';

function App() {
  return (
    <div>
      <Activite1 />
      <Activite2 ma_variable = "toto"/>
    </div>
  );
}

export default App;
