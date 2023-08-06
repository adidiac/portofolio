import React from 'react';
import { Html, useGLTF } from '@react-three/drei';
import { angleToRadians } from '../../utils/angle';
import { cardStyle,rowStyle,columnStyle } from '../inlineStyle';

const Room3 = () => {
  const { scene } = useGLTF('/room3/scene.gltf');
  console.log('Room');

  return <mesh>
    <Html
           position={[0, 1, -1.2]}
           rotation={[angleToRadians(0), angleToRadians(0), 0]}
           transform
    >
        <div style={{fontSize:10,color:'white',textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)'}}>
            <p>Awards</p>
        </div>
    </Html>
   
    <primitive 
        object={scene} 

        scale={ 0.007
        }
        position={[0.1, -0.2, 2]}
        rotation={[angleToRadians(0),angleToRadians(0),angleToRadians(0)]}
        />;
</mesh>;
};

export default Room3;