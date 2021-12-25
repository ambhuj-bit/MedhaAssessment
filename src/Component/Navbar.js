
import "./Navbar.css";
import GroupIcon from '@material-ui/icons/Group';
import ExploreIcon from '@material-ui/icons/Explore';
import HeadsetIcon from '@material-ui/icons/Headset';
import FreeBreakfastIcon from '@material-ui/icons/FreeBreakfast';
import { Link } from "react-router-dom";

export default function Navbar() {
  
  return (
    <div className="nav">
    <div className='nav_logo'>
        <h2>
         <FreeBreakfastIcon  
          style={{
          fontSize:"35px",
          color:"orange",
          verticalAlign:"middle",
          marginRight:"5px",
          marginBottom:"5px"}}  

            className="gly-rotate-45"
          /> 
       MEET
       </h2>
    </div>

    <div className='nav_menu'>
        <ul>
        
        <Link to="/Discovery" className="Link">
        <li><ExploreIcon className='nav_icons'/><span className='nav_nam'>Discovery</span></li>
        </Link> 

        <Link to="/Invited" className="Link">
        <li> <GroupIcon className='nav_icons'/><span className='nav_nam'>Invited</span></li>
        </Link> 
          
          <Link to="/Support" className="Link">
          <li> <HeadsetIcon className='nav_icons'/><span className='nav_nam'>Support</span></li>
          </Link>
        </ul>

        
    </div>

    <div className='nav_sign'> 
       <ul>
         <li><button className="btn_sign1">Post Job</button></li>
         <li><button className='btn_sign'>Sign In</button></li>
       </ul>
    </div>
  </div>

  );
}
