import './App.css';
import Header from './components/Header';
import Spaceagency from './components/space';
import Community from './components/Education';
import Footer from './components/Footer';
import Cards from './components/cards';

function App() {
  return (
    <>
    <div className='main'>
    <Header/>
    <Spaceagency/>
    <Community/>
    <Footer/>
    <Cards/>
    </div>
    </>
  );
}

export default App;
