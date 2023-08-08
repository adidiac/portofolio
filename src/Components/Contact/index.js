import React from 'react';
import { Html, useGLTF } from '@react-three/drei';
import { angleToRadians } from '../../utils/angle';

const Contact = () => {
  return <mesh>
        <spotLight args={["#ffffff", 30, 7, angleToRadians(45), 0.4]} position={[1.2, 1, 6]} castShadow />
        <spotLight args={["#ffffff", 30, 7, angleToRadians(45), 0.4]} position={[-0.8, 2.8, -0.2]} castShadow />
        <Html
              position={[0,-2, -19]}
                rotation={[angleToRadians(-10), angleToRadians(0), 0]}
                transform
        >
              <div class="card">
            <h2 class="card-title">Contact Us</h2>
            <form>
            <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required />
            </div>
            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required />
            </div>
            <div class="form-group">
                <label for="message">Message:</label>
                <textarea id="message" name="message" rows="4" required></textarea>
            </div>
            <button type="submit">Submit</button>
            </form>
        </div>

        </Html>
    </mesh>;
};

export default Contact;