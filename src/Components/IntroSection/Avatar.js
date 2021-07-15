import { Fade } from "@material-ui/core";
import Me from './me.jpg'
function Avatar()
{
    return (
        <div >
        <Fade  mountOnEnter unmountOnExit in={true} timeout={10000}>
            <img src={Me} style={{height:"20vh",
            width:"20vh",
            border:" 3px solid white",
            borderRadius:"100%"}} rounded />
        </Fade>
        </div>
    );
}
export default Avatar;