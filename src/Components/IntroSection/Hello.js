import './Hello.css';
import Typewriter from 'typewriter-effect';
import { useEffect,useState} from 'react';
function Hello() {

    return (
    <div class="center">
      <Typewriter options={{delay:20}}
        onInit={(typewriter) => {
          typewriter.typeString(`Hello! I'm Diac Adrian. I'm a student at Faculty of Information Systems and Cyber ​​Security at "FERDINAND I" MILITARY TECHNICAL ACADEMY.
           If you scroll down you will find about my skills and my experience in Computer Science domain.`)
            .start();
        }}
      />
      </div>
    );
  }
  
  export default Hello;
  