import './App.css';
import { ParallaxProvider } from 'react-scroll-parallax';
import Landing from './components/landing';

function App() {
  return (
   <div>
    <ParallaxProvider>
      <Landing/>
    </ParallaxProvider>
   </div>
  );
}

export default App;

