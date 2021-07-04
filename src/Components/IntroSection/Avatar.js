import { Image,Container,Col } from "react-bootstrap";
import { Slide,Fade } from "@material-ui/core";
import Me from './me.jpg'
function Avatar()
{
    return (
        <div style={{textAlign:"center"}}>
        <Fade  mountOnEnter unmountOnExit in={true} timeout={10000}>
            <Image src={Me} style={{height:"20vh",
            width:"20vh",
            border:" 3px solid white",
            borderRadius:"50%"}} rounded />
        </Fade>
        </div>
    );
}
export default Avatar;