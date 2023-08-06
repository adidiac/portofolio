import React from 'react';
import { Html, useGLTF } from '@react-three/drei';
import { angleToRadians } from '../../utils/angle';
import { cardStyle,rowStyle,columnStyle } from '../inlineStyle';

const Room = () => {
  const { scene } = useGLTF('/room/scene.gltf');
  console.log('Room');

  return <mesh>
    <Html
           position={[-0.5, 2, -1.2]}
           rotation={[angleToRadians(0), angleToRadians(0), 0]}
           transform
    >
        <div style={{fontSize:10,color:'white',textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)'}}>
            <p>Education</p>
        </div>
    </Html>
    <Html
              position={[0.9, 1.5, -1.2]}
                rotation={[angleToRadians(0), angleToRadians(0), 0]}
                transform
    >
        <div style={cardStyle}>
            <p style={{fontSize:2.5}}
            >Military Tehnical Academy Ferdinand I</p>
            <div style={rowStyle}>
                <img src="/education/academy.png" style={{width: 15, height: 12}}/>
                <p style={{fontSize:1.5}}>
                    Bucharest, Romania -
                    Bachelor of Computer Science and Information Technology
                    2018 - 2022
                </p>
            </div>
        </div>
    </Html>
    <Html
              position={[-1, 1.5, 0.5]}
                rotation={[angleToRadians(0), angleToRadians(90), 0]}
                transform
    >
        <div style={cardStyle}>
            <p style={{fontSize:2.5}}
            >
                University Of Bucharest
            </p>
            <div style={rowStyle}>
                <img src="/education/university.png" style={{width: 15, height: 12}}/>
                <p style={{fontSize:1.5}}>
                    Bucharest, Romania -
                    Master of Computer Science and Information Technology
                    2023 - 2025
                </p>
            </div>
        </div>
    </Html>
    <primitive 
        object={scene} 
        scale={ 0.1
        }
        position={[0, 0, 0]}
        rotation={[0,angleToRadians(-180),0]}
        />;
</mesh>;
};

export default Room;