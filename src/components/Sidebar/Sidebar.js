import './Sidebar.scss'
import React from 'react';
import logo from '../../assets/images/logo-s.png'
import my_logo from '../../assets/images/A-logo2.svg'
import logoSub from '../../assets/images/logo_sub.png'
import my_name from '../../assets/images/my_name.svg'
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faMap, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faInstagram, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
// import {MetroLogo} from '../../assets/images/logo1.png'
import MetroLogo from '../../assets/images/M_svg_Logo.svg';
import journey from '../../assets/images/journey.svg';
// import MetroLogo from '../../../assets/images/M_svg_Logo.svg'
function Sidebar(){
return (
    <div className="nav-bar">
        <Link className='logo' to="/">
            <img src={MetroLogo} alt="logo" className='img1'/>
            {/* <img src={my_name} alt="arnavbar" className='sub-logo' /> */}
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d43"/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d43"/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d43"/>
            </NavLink>
            {/* <NavLink exact="true" activeclassname="active" className="map-link" >
            <FontAwesomeIcon icon={faMap} color="#4d4d43">
            <a target='_blank' rel='noreferrer' href="https://www.nmrcnoida.com/PassengerInformation/JourneyPlanner"></a>
                </FontAwesomeIcon>
            </NavLink> */}
        </nav>
        <ul>
            <li>
                <a target='_blank' rel='noreferrer' href="https://www.linkedin.com/in/arnav-tiwari-0b73a41a5/">
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"></FontAwesomeIcon>
                </a>

            </li>
            <li>
                <a target='_blank' rel='noreferrer' href="https://www.nmrcnoida.com/PassengerInformation/JourneyPlanner">
                    <FontAwesomeIcon icon={faMap} color="#4d4d4e"></FontAwesomeIcon>
                </a>

            </li>
            <li>
                <a target='_blank' rel='noreferrer' href="https://www.linkedin.com/in/arnav-tiwari-0b73a41a5/">
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e"></FontAwesomeIcon>
                </a>
            </li>
            <li>
                <a target='_blank' rel='noreferrer' href="https://www.linkedin.com/in/arnav-tiwari-0b73a41a5/">
                    <FontAwesomeIcon icon={faTwitter} color="#4d4d4e"></FontAwesomeIcon>
                </a>
            </li>
            <li>
                <a target='_blank' rel='noreferrer' href="https://www.linkedin.com/in/arnav-tiwari-0b73a41a5/">
                    <FontAwesomeIcon icon={faYoutube} color="#4d4d4e"></FontAwesomeIcon>
                </a>
            </li>
            <li>
                <a target='_blank' rel='noreferrer' href="https://www.linkedin.com/in/arnav-tiwari-0b73a41a5/">
                    <FontAwesomeIcon icon={faInstagram} color="#4d4d4e"></FontAwesomeIcon>
                </a>
            </li>
        </ul>
    </div>
)
}

export default Sidebar;