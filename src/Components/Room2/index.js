import React from 'react';
import { Html, useGLTF } from '@react-three/drei';
import { angleToRadians } from '../../utils/angle';
import { rowStyle,columnStyle ,textWorkStyle} from '../inlineStyle';
const experienceList = [
    {
        title: 'Software Engineer',
        company: 'Ministry of National Defence',
        date: ' August 2022 - Present',
    },
    {
        title: 'Frontend Trainee',
        company: 'Coherent Solutions',
        date: 'August 2022 - August 2023',
    },
    {
        title: 'Teaching Assistant',
        company: 'Military Tehnical Academy Ferdinand I',
        date: 'October 2022 - February 2023',
    },
    {
        title: 'Software Engineer Intern',
        company: 'CERT-RO',
        date: 'August 2020- September 2020',
    },
];

const Room2 = () => {
  const { scene } = useGLTF('/room2/scene.gltf');

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
    <Html
        position={[1.16, 0.5,1.75]}
        rotation={[angleToRadians(0), angleToRadians(0), 0]}
        transform
        >
        <div style={{...columnStyle,color:'white',fontSize:2}}>
                <p style={{fontWeight:'bold'}}>{experienceList[0].title}</p>
                <p>{experienceList[0].company}</p>
                <p>{experienceList[0].date}</p>
                <img src="/work/ministry.png" width="10" height="10" />
        </div>
    </Html>  
    <Html
        position={[-0.95, 0.5,1.75]}
        rotation={[angleToRadians(0), angleToRadians(0), 0]}
        transform
        >
        <div style={{...columnStyle,color:'white',fontSize:2}}>
                <p style={{fontWeight:'bold'}}>{experienceList[1].title}</p>
                <p>{experienceList[1].company}</p>
                <p>{experienceList[1].date}</p>
                <img src="/work/coherent.png" width="10" height="10" />
        </div>
    </Html>  
    <Html
        position={[-0.95, 0.5,0.8]}
        rotation={[angleToRadians(0), angleToRadians(0), 0]}
        transform
        >
        <div style={{...columnStyle,color:'white',fontSize:2}}>
                <p style={{fontWeight:'bold'}}>{experienceList[2].title}</p>
                <p>{experienceList[2].company}</p>
                <p>{experienceList[2].date}</p>
                <img src="/work/academy.png" width="10" height="10" />
        </div>
    </Html>      
    <Html
        position={[1.16, 0.5,0.8]}
        rotation={[angleToRadians(0), angleToRadians(0), 0]}
        transform
        >
        <div style={{...columnStyle,color:'white',fontSize:2}}>
                <p style={{fontWeight:'bold'}}>{experienceList[3].title}</p>
                <p>{experienceList[3].company}</p>
                <p>{experienceList[3].date}</p>
                <img src="/work/cert.png" width="30" height="10" />
        </div>
    </Html> 
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