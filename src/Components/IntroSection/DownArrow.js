import "./DownArrow.scss"
import {ArrowDown} from 'react-bootstrap-icons'
import { Transition } from "react-transition-group";
import $ from 'jquery';

function DownArrow({fontS,where})
{
    return (
            <div style={{color:'white',fontSize:fontS,textAlign:"center",padding:0,margin:0}} class="arrow"><ArrowDown onClick={()=>{
                  $('html, body').animate({
                    scrollTop: $(where).offset().top
                  
                }, 2000);}}
                ></ArrowDown></div>
    );
}
export default DownArrow;