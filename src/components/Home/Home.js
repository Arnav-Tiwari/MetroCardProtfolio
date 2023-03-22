import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/A-logo.svg';
import MetroLogo from '../../assets/images/M_svg_Logo.svg'
import AnimatedLetter from '../AnimatedLetter/AnimatedLetter.js';
import Loader from '../Loader/Loader';
import './Home.scss';
import Logo from './Logo/Logo';
function Home(){
    const[letterClass,setLetterClass] = useState('text-animate');
    const nameArray = ['e','t','r','o',' ','C','a','r','d'];
    // const jobArray = ['w','e','b',' ','d','e','v','e','l','o','p','e','r'];
    const jobArray = ['E','x','c','l','u','s','i','v','e',' ','S','e','r','v','i','c','e']
    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4000)
      }, [])

      const[loading,setLoading]=useState(false);

      useEffect(()=>{
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
        },1000)
      },[])

    return (
        <div className='whole-wrapper'>
        {
            loading?
            <div className="loader-wrapper">
            {/* <ClimbingBoxLoader className='box_loader'
            color="#ffd700"
            /> */}
            <Loader/>
            </div>
            :
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                {/* <span className={`${letterClass} _11`}>H</span>
                <span className={`${letterClass} _12`}>i,</span>
                <br />
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span> */}
                <img src={MetroLogo} alt="developer" className='Metro-logo'/>
                <AnimatedLetter letterClass={letterClass}
                strArray={nameArray}
                idx={15}/>
                <br />
                <AnimatedLetter letterClass={letterClass}
                strArray={jobArray}
                idx={25}/>
                </h1>
                {/* <h2>Java Programmer/ Frontend Developer/ Content Writer</h2> */}
                <h2>Robust/ Relaible/ Time Saving</h2>
                <Link to='/contact' className='flat-button'>Contact Me</Link>
            </div>
            <Logo/>
        </div>
}
        </div>
    )
}  

export default Home;