import './App.css';
import GallaryFooter from './components/GallaryFooter';
import GallaryHeader from './components/GallaryHeader';
import DataComponent from './components/DataComponent';
import GallaryBody from './components/GallaryBody';

function App() {
  return (
    <div>
      <GallaryHeader/>

      <GallaryBody myData = {DataComponent}/>

      {/* adding footer component */}
      <GallaryFooter/> 
    </div>
  )
}

export default App;
