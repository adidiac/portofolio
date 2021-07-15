import { Card } from "react-bootstrap";
//import AboutBackground from '../../Images/Portofolio.png'
import './projectCard.css'
export default function ProjectCard({title,gradient,image})
{
    return (
        <Card className="growCard" onClick={()=>{}}
        style={{
                border:0,
                backgroundImage: `${gradient},
                url('${image}')`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                height:100,
                width:200
            }}>
            <Card.Body style={{display:"flex",
                justifyContent:"flex-start",color:"white",fontWeight:"bold",fontSize:20,textShadow:"2px 3px black"}}>
            <Card.Text>
                {title}
            </Card.Text>
            </Card.Body>
        </Card>
    );
}