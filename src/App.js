import Avatar from "./Components/IntroSection/Avatar";
import Hello from "./Components/IntroSection/Hello";
import Background from  './Images/Background.png';
import DownArrow from "./Components/IntroSection/DownArrow";
import {Container,Row,Col} from 'react-bootstrap'
function App() {
  return (
    <div>
      {/**Hello */}
      <section style={
        {
          backgroundImage: `url(${Background})`,
          backgroundSize:"cover",
          width:"100%",
          fontSize:"1em",
          height: "100vh", 
        }}>
        <Container>
          <Row style={{paddingTop:"2em",paddingBottom:"2em"}}>
            <Avatar></Avatar>
          </Row>
          <Row  style={{paddingTop:"2em",paddingBottom:"2em"}}>
            <Hello></Hello>
          </Row>
          <Row  style={{paddingBottom:"2em"}}>
            <DownArrow></DownArrow>
          </Row>
        </Container> 
      </section>
      {/* about me */}
     <section style={{backgroundColor:"yellow",width:"100%",height:"100vh"}
     }>

     </section>
     {/**projects */}
     <section>

     </section>
     {/**contact me */}
     <section>
    
    </section>
    </div>
  );
}

export default App;
