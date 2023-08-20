import React from 'react';
import { Html, useGLTF } from '@react-three/drei';
import { angleToRadians } from '../../utils/angle';
import { cardStyle,rowStyle,columnStyle } from '../inlineStyle';
import '../../App.css'
import {assetsPath} from '../../utils/consts'
import { skillsLists } from './skills';


const Room4 = ({scene}) => {
  return <mesh>
        <Html
            position={[0.05, 3, -10]}
            rotation={[angleToRadians(0), angleToRadians(0), 0]}
            transform
        >
            <div style={{fontSize:20,color:'white',textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
            textAlign:'center',fontWeight:'bold'
        }}>
                <p>Skills</p>
            </div>
        </Html>
        { skillsLists.map((item,index) => {
            return (
        <Html
                position={item.position}
                    rotation={[angleToRadians(0), angleToRadians(0), 0]}
                    transform
        >
            <div style={{fontSize:5,color:'white',textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
            textAlign:'center',fontWeight:'bold'
        }} className='rotate-element'>
                <p>{skillsLists[index].title}</p>
                <img src={skillsLists[index].picture} style={{width:50,height:50}}/>
            </div>

        </Html>
            )
        })}
    
        <primitive 
            object={scene} 
            scale={ 0.5 }
            position={[0.1, -2, -3]}
            rotation={[angleToRadians(0),angleToRadians(-90),angleToRadians(0)]}
            />;
    </mesh>;
};

export default Room4;