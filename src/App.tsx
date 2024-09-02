import TopBanner from './components/Banner/Banner';
import Header from './components/Header/Header';
import MainPageProductSlider from './components/MainPageProductSlider/MainPageProductSlider';
import './styles.css';

function App() {
  return (
    <>
      <TopBanner></TopBanner>
      <Header></Header>
      <MainPageProductSlider></MainPageProductSlider>
      <div style={{ height: '2000px' }}></div>
    </>
  );
}

export default App;
