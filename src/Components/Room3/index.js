import React from 'react';
import { Html, useGLTF } from '@react-three/drei';
import { angleToRadians } from '../../utils/angle';
import { cardStyle,rowStyle,columnStyle } from '../inlineStyle';
import '../../App.css'
const awardsList = [
    {
        title: '1st Place',
        contest: 'Hackathon 2022 - BestEM22',
        date: 'May 2022',
        projectTitle: 'Garuda',
        describe:'Blockchain-gamification-based platform that enhances the lifestyle of people working in corporations through data from wearable devices and live camera footage, and also the productivity of companies through early burnout prediction'
    },
    {
        title: '1st Place',
        contest: 'Hackathon 2022 - DevHacks',
        date: 'November 2022',
        projectTitle: 'Bach',
        describe:`
        Complete Full-Stack Solution to facilitate access to an online shop for people with visual or hearing disabilities. 
        `
    },
    {
        title: '3st Place',
        contest: 'Hackathon 2021',
        date: 'November 2021',
        projectTitle: 'Prevent.io',
        describe:`
        Frontend and deployment for Prevent.io app - Smarthack 2021 Hackathon 3rd place awarded.Tehnologies used : React js + Redux, Kubernetes+Docker
        `
    },
];
const Room3 = () => {
  const { scene } = useGLTF('/room3/scene.gltf');
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
    <Html
        position={[1.8, 0.3,-0.7]}
        rotation={[angleToRadians(0), angleToRadians(-40), 0]}
        transform
        >
        <a href="https://github.com/adidiac/bestemSolution" target="_blank"
        >
        <div style={{...columnStyle,color:'white',fontSize:3}}>
                <p style={{fontWeight:'bold'}}>{awardsList[0].title}</p>
                <p>{awardsList[0].contest}</p>
                <p>{awardsList[0].date}</p>
                <p>{awardsList[0].projectTitle}</p>
                {/* <p>{awardsList[0].describe}</p> */}
                <img src="/awards/1rd.png" width="20" height="30" />
        </div>
        </a>
    </Html>
    <Html
        position={[-1.6, 0.3,-0.7]}
        rotation={[angleToRadians(0), angleToRadians(40), 0]}
        transform
        >
        <a href="https://github.com/georgecpp/BACH.git" target="_blank"
        >
        <div style={{...columnStyle,color:'white',fontSize:3}}>
                <p style={{fontWeight:'bold'}}>{awardsList[1].title}</p>
                <p>{awardsList[1].contest}</p>
                <p>{awardsList[1].date}</p>
                <p>{awardsList[1].projectTitle}</p>
                {/* <p>{awardsList[0].describe}</p> */}
                <img src="/awards/1rd.png" width="20" height="30" />
        </div>
        </a>
    </Html>
    <Html
        position={[-1.4, 0.3,-2.8]}
        rotation={[angleToRadians(0), angleToRadians(20), 0]}
        transform
        >
        <a href="https://github.com/adidiac/hackTonVersion1" target="_blank"
        >
        <div style={{...columnStyle,color:'white',fontSize:3}}>
                <p style={{fontWeight:'bold'}}>{awardsList[2].title}</p>
                <p>{awardsList[2].contest}</p>
                <p>{awardsList[2].date}</p>
                <p>{awardsList[2].projectTitle}</p>
                {/* <p>{awardsList[0].describe}</p> */}
                <img src="/awards/3rd.png" width="20" height="30" />
        </div>
        </a>
    </Html>
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