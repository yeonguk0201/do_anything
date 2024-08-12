import TopBanner from './components/Banner/Banner';
import Header from './components/Header/Header';
import './styles.css';

function App() {
  return (
    <>
      <TopBanner></TopBanner>
      <Header></Header>
      <div style={{ height: '2000px' }}></div>
    </>
  );
}

export default App;
