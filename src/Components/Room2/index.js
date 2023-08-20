import React from 'react';
import { Html, useGLTF } from '@react-three/drei';
import { angleToRadians } from '../../utils/angle';
import { rowStyle,columnStyle ,textWorkStyle} from '../inlineStyle';
import {assetsPath} from '../../utils/consts';
import { experienceList } from './experience';


const Room2 = ({scene}) => {
  return <mesh>
    <Html
        position={[0.1, 1, -1]}
        rotation={[angleToRadians(0), angleToRadians(0), 0]}
        transform
     >
     <div style={{fontSize:10,color:'white',textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)'}}>
         <p>Experience</p>
     </div>
    </Html>
    {experienceList.map((experience, index) => ( 
    <Html
        position={experience.positions}
        rotation={[angleToRadians(0), angleToRadians(0), 0]}
        transform
        >
        <div style={{...columnStyle,color:'white',fontSize:2}}>
                <p style={{fontWeight:'bold'}}>{experienceList[index].title}</p>
                <p>{experienceList[index].company}</p>
                <p>{experienceList[index].date}</p>
                <img src={experienceList[index].image} width="10" height="10" />
        </div>
    </Html>  ))}
    <primitive 
        object={scene} 
        scale={ 0.007
        }
        position={[0.1, -0.4, 2]}
        rotation={[angleToRadians(0),angleToRadians(0),angleToRadians(0)]}
        />;
</mesh>;
};

export default Room2;