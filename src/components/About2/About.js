import React, { useEffect, useState } from 'react'
import { CSSProperties } from 'react';
import { ClimbingBoxLoader } from 'react-spinners';
import Loader from '../Loader/Loader';
// import ClimbingBox from '/ClimbingBox.tsx'
import AnimatedLetter from '../AnimatedLetter/AnimatedLetter';
// import Loader from '../Loader/Loader';
// import Sphere from './Sphere';
import './About.scss';
import Sphere from './Sphere';
// import AnimatedLetter from '../AnimatedLetter/AnimatedLetter';


// function About(){
//     const[letterClass,setLetterClass] = useState('text-animate');
//     useEffect(() => {
//         setTimeout(() => {
//           setLetterClass('text-animate-hover')
//         }, 4000)
//       }, [])
//     return(
//         <div className="container1 about-page">
//             <div className="text-zone">
//                 <h1>
//                     <AnimatedLetter 
//                         letterClass={letterClass}
//                         strArray={['A','b','o','u','t',' ','m','e']}
//                         idx={15}  
//                     />
//                 </h1>
//                 <p>
//                     I'm very ambitious front-end developer looking for a role in established IT company with the opportunity 
//                     to work the latest technologies on challenging and diverse projects.
//                 </p>
//                 <p>
//                     I'm quietly confident, naturally curious, and perpetually working on improving on chops one design problem at a time.
//                 </p>
//                 <p>
//                     If I need to define myself in one word that would be ORIGINAL!.
//                 </p>
//             </div>

//             {/* <div className="Sphere">
//                 <Sphere />
//             </div> */}
//             <Sphere/>
//         </div>
//     )
// }


function About(){
    const[letterClass,setLetterClass] = useState('text-animate');
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
            <div className="wrapper">
                <div className="left-side">
                    <div className="left-wrapper">
                    <h1 className="title">
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
                </div>
                <div className="right-side">
                    <div className="right-wrapper">
                    <Sphere />
                    </div>
                </div>
            
            </div>
        }
        </div>
        // <div className="container1 about-page">
        //     <div className="text-zone">
        //         <h1>
        //             About me
        //             {/* <AnimatedLetter 
        //                 letterClass={letterClass}
        //                 strArray={['A','b','o','u','t',' ','m','e']}
        //                 idx={15}  
        //             /> */}
        //         </h1>
        //         <p>
        //             I'm very ambitious front-end developer looking for a role in established IT company with the opportunity 
        //             to work the latest technologies on challenging and diverse projects.
        //         </p>
        //         <p>
        //             I'm quietly confident, naturally curious, and perpetually working on improving on chops one design problem at a time.
        //         </p>
        //         <p>
        //             If I need to define myself in one word that would be ORIGINAL!.
        //         </p>
        //     </div>
        // </div>
    )
}
export default About;