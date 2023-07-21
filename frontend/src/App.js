import logo from './logo.svg';
import './App.css';
import Header from './component/Header/Header';
import MusicPlayBar from './component/MusicPlayBar';
import {Footer} from './component/Footer/Footer';

function App() {
  return (
    <div className="App">
        <Header/>
        <MusicPlayBar />
        <Footer/>
    </div>
  );
}

export default App;
