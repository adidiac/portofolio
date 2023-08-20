 import React from 'react';
import { angleToRadians } from '../../utils/angle';

const House = ({scene}) => {
  
  return <mesh>
        <spotLight args={["#ffffff", 30, 7, angleToRadians(45), 0.4]} position={[1.2, 1, 6]} castShadow />
        <spotLight args={["#ffffff", 30, 7, angleToRadians(45), 0.4]} position={[-0.8, 2.8, -0.2]} castShadow />
        <primitive 
        object={scene} 
        scale={ 0.3}
        position={[0, -1, 0]}
        rotation={[0,angleToRadians(-90),0]}
        />
    </mesh>;
};

export default House;