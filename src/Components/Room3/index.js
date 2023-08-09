import React from 'react';
import { Html, useGLTF } from '@react-three/drei';
import { angleToRadians } from '../../utils/angle';
import { cardStyle,rowStyle,columnStyle } from '../inlineStyle';
import '../../App.css'
import {assetsPath} from '../../utils/consts'
import { awardsList } from './awards';

const Room3 = () => {
  const { scene } = useGLTF(assetsPath+'/room3/scene.gltf');
  console.log('Room');

  return <mesh>
    <Html
           position={[0.1, 1, -3]}
           rotation={[angleToRadians(0), angleToRadians(0), 0]}
           transform
    >
        <div style={{fontSize:10,color:'white',textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
        textAlign:'center',fontWeight:'bold'
    }}>
            <p>Awards room</p>
            <p style={{fontSize:5}}>Click to see more</p>
        </div>
    </Html>

    { awardsList.map((award, index) => {
    return <Html
        position={award.position}
        rotation={award.angles}
        transform
        >
        <a href={award.link} target="_blank">
        <div style={{...columnStyle,color:'white',fontSize:3}}>
                <p style={{fontWeight:'bold'}}>{awardsList[index].title}</p>
                <p>{awardsList[index].contest}</p>
                <p>{awardsList[index].date}</p>
                <p>{awardsList[index].projectTitle}</p>
                <img src={award.image} width="20" height="30" />
        </div>
        </a>
    </Html> })}
  
    <primitive 
        object={scene} 

        scale={ 0.5
        }
        position={[0.1, -0.2, 0]}
        rotation={[angleToRadians(0),angleToRadians(-90),angleToRadians(0)]}
        />;
</mesh>;
};

export default Room3;