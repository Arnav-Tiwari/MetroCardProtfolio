import React, { useEffect, useState } from 'react'
import AnimatedLetter from '../AnimatedLetter/AnimatedLetter';
// import Sphere from './Sphere';
import './About.scss';
import Sphere from './Sphere';

function About(){
    const[letterClass,setLetterClass] = useState('text-animate');
    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4000)
      }, [])
    return(
        <div className="container1 about-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetter 
                        letterClass={letterClass}
                        strArray={['A','b','o','u','t',' ','m','e']}
                        idx={15}  
                    />
                </h1>
                <p>
                    I'm very ambitious front-end developer looking for a role in established IT company with the opportunity 
                    to work the latest technologies on challenging and diverse projects.
                </p>
                <p>
                    I'm quietly confident, naturally curious, and perpetually working on improving on chops one design problem at a time.
                </p>
                <p>
                    If I need to define myself in one word that would be ORIGINAL!.
                </p>
            </div>

            {/* <div className="Sphere">
                <Sphere />
            </div> */}
            <Sphere/>
        </div>
    )
}

export default About;