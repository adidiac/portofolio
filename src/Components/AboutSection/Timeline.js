import {React,useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ListGroup,Container } from 'react-bootstrap';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Timeline from '@material-ui/lab/Timeline';
import SchoolIcon from '@material-ui/icons/School';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import DeveloperModeIcon from '@material-ui/icons/DeveloperMode';
import BusinessIcon from '@material-ui/icons/Business';
import DotTimeline from './DotTimeLine';
const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 16px',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default function CustomizedTimeline() {

  const listGroupStyle={backgroundColor:"blueviolet",color:"white"};
  const classes = useStyles();
  const [showCollege, setShowCollege] = useState(false);
  const [showAcademy,setShowAcademy]=useState(false);
  const [showIntership,setShowIntership]=useState(false);
  const [showJob,setShowJob]=useState(false);

  const handleCloseCollege = () => setShowCollege(false);
  const handleShowCollege = () => setShowCollege(true);

  const handleCloseAcademy = () => setShowAcademy(false);
  const handleShowAcademy = () => setShowAcademy(true);

  const handleCloseIntership = () => setShowIntership(false);
  const handleShowIntership = () => setShowIntership(true);

  const handleCloseJob = () => setShowJob(false);
  const handleShowJob = () => setShowJob(true);
  
  return (
    <div style={{overflow:"hidden"}}>
    <Timeline align="alternate">
      <DotTimeline Date={'2014-2018'} Text={'Stefan cel mare" Military College, Campulung Moldovenesc(SV)'}
      Icon={<SchoolIcon />} Handle={handleShowCollege}
      />
      <DotTimeline Date={'2018-present'} Text={`Military Tehnical Academy, Bucharest
      Bachelor of Computer Science and Cyber security`}
      Icon={<LaptopMacIcon />} Handle={handleShowAcademy} DotColor={"primary"}/>
      <DotTimeline Date={'August 2020-September 2020'}
      Text={'Intership CERT-RO Bucharest'} Icon={<DeveloperModeIcon />} DotColor={'primary'} Variant={'outlined'}
      Handle={handleShowIntership}/>
      <DotTimeline Date={'Now'}
      Text={'Free for part-time jobs, projects, interships.'} Icon={<BusinessIcon />} DotColor={"secondary"}
      Handle={handleShowJob}/>
    </Timeline> 

     <Dialog
        open={showCollege}
        onClose={handleCloseCollege}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Activity from military college
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          <Container>
          <ListGroup>
            <ListGroup.Item style={listGroupStyle}>Student Council</ListGroup.Item>
            <hr></hr>
            <ListGroup.Item style={listGroupStyle}>CEX Informatics and Mathematics(centre of excellence)</ListGroup.Item>
            <hr></hr>
            <ListGroup.Item style={listGroupStyle}>Place 3(bronze medal) at Intercounty Mathematics Challenge XII edition</ListGroup.Item>
            <hr></hr>
            <ListGroup.Item style={listGroupStyle}>Place 1 at Bucovina Mathematics Challenge</ListGroup.Item>
            <hr></hr>
            <ListGroup.Item style={listGroupStyle}>Place 2 at Infoeducation Challenge(Education Section)</ListGroup.Item>
            <hr></hr>
            <ListGroup.Item style={listGroupStyle}>Place 3 at Infoeducation Challenge(Utilities Section)</ListGroup.Item>
            <hr></hr>
          </ListGroup>
          </Container>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseCollege} color="primary" autoFocus>
            Continue
          </Button>
        </DialogActions>
        </Dialog>

        <Dialog
        open={showAcademy}
        onClose={handleCloseAcademy}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Activity at Military Tehnical Academy</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          <Container>
          <ListGroup>
            <ListGroup.Item style={listGroupStyle}>Participation at National Stage of ACM(Association for Computing Machinery) </ListGroup.Item>
            <hr></hr>
            <ListGroup.Item style={listGroupStyle} >Participation at CERT-RO Workshop</ListGroup.Item>
          </ListGroup>
          </Container>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseAcademy} color="primary" autoFocus>
            Continue
          </Button>
        </DialogActions>
        </Dialog>

          <Dialog
        open={showIntership}
        onClose={handleCloseIntership}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title"> Activity for CERT-RO during intership</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
              During this activity I obtained qualities and experience regarding the management of a national institution responsible 
              for the field of cyber security and I finished with the grade very well. More details you can find in the document below.
              <a href="https://drive.google.com/file/d/10s0S98KnVMH8zXvgrawJg07DUJ_dRe1k/view?usp=sharing" target="_blank">
                Press here for the document</a>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseIntership} style={listGroupStyle} autoFocus>
            Continue
          </Button>
        </DialogActions>
        </Dialog>
        

        <Dialog
        open={showJob}
        onClose={handleCloseJob}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Just contact me</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          <Link href="#contact"  color="inherit">
          <Button variant="contained" color="primary" onClick={handleCloseJob}>
            Go to contact
          </Button>
          </Link>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseJob} color="primary" autoFocus>
            Or continue
          </Button>
        </DialogActions>
        </Dialog>
    </div>
  );
}
