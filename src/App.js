import './App.css';
import Footer from './component/Footer';
import Header from './component/Header';
import Main from './component/Main';
import Slider from './component/Slider';
import {mask} from './data';

function App() {
  
  return (
    <div className="App">
      <Header/>
      <Main
        Mask1={mask[0]}
        Mask2={mask[1]}
      />
      <Slider/>
      <Main
        Mask1={mask[2]}
        Mask2={mask[3]}
      />
      <Footer/>
    </div>
  );
}

export default App;
