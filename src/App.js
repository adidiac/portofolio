import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import './App.css'
import Three from './Components/Three';
import CanvasLoader from './Components/Loader/CanvasLoader';


function App() {
  return (
    <Canvas id="three-canvas-container" shadows>
      <Suspense fallback={<CanvasLoader />}>
        <Three />        
      </Suspense>
    </Canvas>
  );
}

export default App;
