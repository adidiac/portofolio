import { Environment, Html, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import {  useRef,useEffect } from "react";
import { angleToRadians } from "../utils/angle";
import * as THREE from "three";
import gsap from "gsap";
import House from "./House";
import { useState } from "react";
import Room from "./Room";
import Room2 from "./Room2";
import Room3 from "./Room3";
import Room4 from "./Room4";
import Contact from "./Contact";

export default function Three() {

    const orbitControlsRef = useRef(null);
    const cameraRef = useRef(null);
    const countRef = useRef(0);
    const [change, setChange] = useState(false);

    const scenes = [ <House />, <Room />,<Room2 />, <Room3 />,<Room4 />, <Contact />];
    const moveCamera = async () => {
        if (!!orbitControlsRef.current) {
            const timeline = gsap.timeline( {paused: true});

            timeline.to(orbitControlsRef.current.target, {
                duration: 2,
                y:2,
                onUpdate: () => {
                    orbitControlsRef.current.update();
                }
            });

            timeline.to(cameraRef.current.position, {
                duration: 2,
                z: 0,
            }, "<");

            setTimeout(() => {
                const timeline = gsap.timeline( {paused: true});
                setChange(prev => !prev);

                timeline.to(orbitControlsRef.current.target, {
                    duration: 2,
                    y:1,
                });
                const z1 = countRef.current!=scenes.length ? 3.5 : 12;
                timeline.to(cameraRef.current.position, {
                    duration: 2,
                    z: z1,
                }, "<");

                timeline.play();

                }, 2000);

                timeline.play();
        }

    }

    useEffect(() => {
        const handleKeyPress = (event) => {
          if (event.key === 'Enter') {
            countRef.current += 1;
            moveCamera();
          }
        };
    
        document.addEventListener('keydown', handleKeyPress);
    
        return () => {
          document.removeEventListener('keydown', handleKeyPress);
        };
      }, [])

    return (
        <>
            <Html
                position={[-7, 4, 0]}
                rotation={[angleToRadians(-10), angleToRadians(0), 0]}
                transform
                zIndexRange={[100, 0]}
            >
                <div id="three-html-container" className="text">
                    <h1>Diac Adrian</h1>
                    <p>Software engineer. Teaching assistent. Web Developer</p>
                    <p>Please <span className="neon-button">enter</span> to present everything</p>
                   </div>
            </Html>

            {/* Camera */}
            <PerspectiveCamera makeDefault position={[0, 2, 13]} ref={cameraRef}/>
            <OrbitControls ref={orbitControlsRef} minPolarAngle={angleToRadians(60)} maxPolarAngle={angleToRadians(80)} />

            {scenes[countRef.current % scenes.length]}

            {/* Ambient light */}
            <ambientLight args={["#ffffff", 0.25]} />

            {/* Environmnet */}
            <Environment background>
                <mesh>
                    <sphereGeometry args={[50, 100, 100]} />
                    <meshBasicMaterial color="#2266cc" side={THREE.BackSide} />
                </mesh>
            </Environment>
        </>
    )
}
