import { Button } from 'react-bootstrap'
import {Card,ListGroup,NavLink} from 'react-bootstrap'
import { useState } from 'react';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
export default function MyCard({title,description,color,icon,more})
{
  const [show,setShow]=useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return <Card
    text={'white'}
    style={{ width: '15rem',margin:10,fontSize:"1rem",backgroundColor:color}}
  >
    <Card.Header style={{justifyContent:"space-between",display:"flex",textAlign:"center"}}>

      {title}<i style={{fontSize:"1.5rem"}} class={`devicon-${icon}-plain`}></i>
      {title==="HTML & CSS"?<i style={{fontSize:"1.5rem"}} class={`devicon-css3-plain`}></i>:<></>}
      </Card.Header>
    <Card.Body>
      <Card.Text>
        {description}
        <br></br>
        <br></br>
        {more.length>0?<Button style={{fontSize:"0.7rem"}} onClick={handleShow}>More</Button>:<></>}
      </Card.Text>
    </Card.Body>
    <Dialog
        open={show}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Certificate List</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          <ListGroup>
            {more.map(el=><ListGroup.Item style={{backgroundColor:"blueviolet"}}><a style={{color:"white"}} href={el} target="blank">Certificate</a></ListGroup.Item>)}
          </ListGroup>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            Continue
          </Button>
        </DialogActions>
        </Dialog>
  </Card>
}