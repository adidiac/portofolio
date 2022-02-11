import Avatar from "./Components/IntroSection/Avatar";
import Hello from "./Components/IntroSection/Hello";
import DownArrow from "./Components/IntroSection/DownArrow";
import {Row,Col, Container,Image,OverlayTrigger,Tooltip} from 'react-bootstrap'
import {skillList} from './Components/SkillSection/SkillList'
import { projectList } from "./Components/ProjectSection/projectList";
import jQuery from "jquery";
import CustomizedTimeline from './Components/AboutSection/Timeline'
import MyCard from './Components/SkillSection/MyCard'
import $ from 'jquery';
import * as Icon from 'react-bootstrap-icons'
import MyNav from "./Components/MyNav";
import CardImage from './Images/1.svg'
import ProjectCard from "./Components/ProjectSection/ProjectCard";
import { Card } from "@material-ui/core";
var sections=['intro','about','skills','projects'];
var index=0;

function scrollToNew () {
  if(index<4){
  $('html, body').animate({
      scrollTop: $(`#${sections[index++]}`).offset().top
  })
  }
  
}
jQuery(function () {
  $(document).keydown(function (evt) {
    if (evt.keyCode == 40) { // down arrow
      evt.preventDefault(); // prevents the usual scrolling behaviour
      scrollToNew(); // scroll to the next new heading instead
    }
  });

});
function App() {

  const iconStyle={width:50,height:50,margin:10};
  

  const styleSection=(Image)=>{
    return {
      scrollBehavior: "smooth",
      backgroundColor:"#171c28",
      backgroundSize:"cover",
      backgroundRepeat:'no-repeat',
      width:"100%",
      height: "100vh", 
      margin:0,padding: 0,
      justifyContent:'space-evenly',display:'flex',flexDirection:'column',alignItems:"center"
    }
  }
  const styleSection2={
      scrollBehavior: "smooth",
      backgroundColor:"#171c28",
      backgroundSize:"cover",
      backgroundRepeat:'no-repeat',
      textAlign:"center",
      height: "100%", 
      margin:0,padding: 30,
      justifyContent:'space-evenly',display:'flex',flexDirection:'column',alignItems:"center"
  }
  return (
    <div>
      {/**Hello */}
      <MyNav></MyNav>
      <section id="intro" style={styleSection()}>
          <Row style={{paddingTop:"2vh",paddingBottom:"2vh"}}>
            <Avatar></Avatar>
          </Row>
          <Row  style={{paddingTop:"2vh",paddingBottom:"2vh"}}>
            <Hello></Hello>
          </Row>
          <Row  style={{paddingTop:"2vh",paddingBottom:"2vh"}}>
            <DownArrow fontS={'10vh'} where={'#about'}></DownArrow>
          </Row>
      </section>
      <hr style={{backgroundColor:"silver",height:1,margin:20}}></hr>
      {/* about me */}
      <section id="about" style={styleSection2}>
        <h1 style={{margin:0,color:'white',textAlign:'center',position:'relative'}}>Education and Experience</h1>
        <br></br>
        <br></br>
       <CustomizedTimeline></CustomizedTimeline>
       <DownArrow fontS={'8vh'} where={'#skills'}></DownArrow>
     </section>
     <hr style={{backgroundColor:"silver",height:1,margin:20}}></hr>
      {/**skills */}
      <section id="skills" style={styleSection2}>
      <h1 style={{margin:0,color:'white',textAlign:'center',position:'relative'}}>Skills</h1>
      <br></br>
      <br></br>
        <Row style={{textAlign:"center",margin:30,width:"100%"}}>
         {
           skillList.map(el=><MyCard
             color={el.color}
              title={el.title} 
              description={el.description} 
              icon={el.icon}
              more={el.more}
            >
            </MyCard>)
         }
        </Row>
        <DownArrow fontS={'8vh'} where={'#projects'}></DownArrow>
      </section>
     {/**projects */}
     <hr style={{backgroundColor:"silver",height:1,margin:20}}></hr>
     <section id="projects" style={styleSection2}>
     <h1 style={{margin:0,color:'white',textAlign:'center',position:'relative'}}>My Projects</h1>
      <br></br>
      <br></br>
     <Row style={{display:"flex",flexWrap:"wrap",textAlign:"center",justifyContent:"space-evenly",margin:20}}>
       {projectList.map(e=><ProjectCard title={e.title} gradient={e.gradientColor} image={e.backgroundImage} link={e.link}></ProjectCard>)}
     </Row>
     <br></br>
      <DownArrow fontS={'8vh'} where={'#contact'}></DownArrow>
     </section>
     {/**contact me */}
     <hr style={{backgroundColor:"silver",height:1,margin:20}}></hr>
     <section  id="contact" style={styleSection2}>
     <h1 style={{margin:0,color:'white',textAlign:'center',position:'relative'}}>Contact</h1>
     <br></br>
     <br></br>
     <br></br>
     <Container style={{margin:0,padding:0}}>
     <Row style={{margin:0,color:"white",display:"flex",flexWrap:"flex-wrap",justifyContent:"space-evenly",width:"100%"}}>
      <Col style={{marginLeft:20,textAlign:"center"}}>
      <Row>
      I am a self-taught software developer with a strong eye for innovative design and a keen understanding of techniques geared toward optimum user experience.
      Feel free to contact me for job oportunities
      </Row>
      <Row style={{margin:20,justifyContent:"center"}}>
       <a href="https://www.linkedin.com/in/adrian-diac-7381531a2/" target="_blank"><Icon.Linkedin style={iconStyle} /></a>
       <a href="https://github.com/adidiac" target="_blank"><Icon.Github style={iconStyle}/></a>
       <a href="https://www.instagram.com/_adrian_diac/" target="_blank"><Icon.Instagram style={iconStyle}/></a>
       <a href="https://www.facebook.com/adi.diac" target="_blank"><Icon.Facebook style={iconStyle}/></a>
       <OverlayTrigger  placement={'right'}  overlay={
        <Tooltip >
          <strong>diacadi@gmail.com</strong>.
        </Tooltip>
      }>
         <Icon.Mailbox style={iconStyle}/></OverlayTrigger>
     </Row>
      </Col>
      <Col style={{marginLeft:20,textAlign:"center"}}>
          <Row style={{justifyContent:"center"}}> This portofolio was made by me using React framework.</Row>
          <br></br>
          <img src={CardImage} style={{border:" 3px solid white",
            borderRadius:"100%",width:200,height:200}}></img>
     </Col>
     </Row> 
     </Container>
     <br></br>
     <br></br>
     <br></br>
    </section>
    </div>
  );
}

export default App;
