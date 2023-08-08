import React from 'react';
import { Html, useGLTF } from '@react-three/drei';
import { angleToRadians } from '../../utils/angle';
import { cardStyle,rowStyle,columnStyle } from '../inlineStyle';
import '../../App.css'
const skillsLists = [
   {
         title: 'React',
         picture:'/skills/1.png',
        position:[0.05, 1.2, -7.8]
   }
    ,{
            title: 'Python',
            picture:'/skills/2.png',
            position:[-1.7, 1.2, -6.4]
    }
    ,{
            title: 'Node Js',
            picture:'/skills/3.png',
            position:[1.8, 1.2, -6.4]
    }
    ,{
            title: 'C#',
            picture:'/skills/4.png',
            position:[3.6 , 2.5, -3.4]
    }
    ,{
            title: 'C++',
            picture:'/skills/5.png',
            position:[-3.6, 2.5, -3.3]
    }
    ,{
            title: 'Azure',
            picture:'/skills/6.png',
            position:[0.05, 0.3, -2.5]
    }
];
const Room4 = () => {
  const { scene } = useGLTF('/room4/scene.gltf');

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

        scale={ 0.5
        }
        position={[0.1, -2, -3]}
        rotation={[angleToRadians(0),angleToRadians(-90),angleToRadians(0)]}
        />;
</mesh>;
};

export default Room4;