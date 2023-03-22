import React, { useEffect, useRef, useState } from 'react'
import Loader from '../Loader/Loader';
import AnimatedLetter from '../AnimatedLetter/AnimatedLetter';
import './Contact.scss';
import emailjs from '@emailjs/browser';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
// import { MapContainer } from 'react-leaflet';
function Contact(){
    const form = useRef()
    const [done, setDone] = useState(false);
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

      const sendEmail = (e) => {
        e.preventDefault()
    
        emailjs
          .sendForm('service_m32ufr9', 'template_xsg8p3q', form.current, '5AnY0cyHkg_qs1Jt9')
          .then(
            () => {
              alert('Message successfully sent!')
              window.location.reload(false)
            },
            () => {
              alert('Failed to send the message, please try again')
            }
          )
      }
    return (
        <div className="contact-wrapper">
            {
                loading?
                <div className="loader-wrapper">
            <Loader/>
            </div>
            :
            <div className="conatiner contact-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetter
                        letterClass={letterClass}
                        strArray={['C','o','n','t','a','c','t',' ','m','e']}
                        idx={15}
                        />
                    </h1>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat odit pariatur architecto cupiditate iure exercitationem amet at suscipit aspernatur optio, iusto corrupti minima aliquid, perferendis dolorem saepe quas et aliquam.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae sed facilis possimus necessitatibus cupiditate sapiente nulla. Laudantium vero porro aperiam saepe officiis hic sapiente ut, placeat facere, iusto ad voluptatum.
                    </p>
                    <div className="contact-form">
                        <form  ref={form} onSubmit={sendEmail}>
                        <ul>
                                <li className="half">
                                <input placeholder="Name" type="text" name="name" required />
                                </li>
                                <li className="half">
                                <input
                                    placeholder="Email"
                                    type="email"
                                    name="email"
                                    required
                                />
                                </li>
                                <li>
                                <input
                                    placeholder="Subject"
                                    type="text"
                                    name="subject"
                                    required
                                />
                                </li>
                                <li>
                                <textarea
                                    placeholder="Message"
                                    name="message"
                                    required
                                ></textarea>
                                </li>
                                <li>
                                <input type="submit" className="flat-button" value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                {/* <div className="info-map">
                Arnav Tiwari,
                <br />
                India,
                <br />
                Plot No: 165, Manohar Nagar, Barra 2 <br />
                Kanpur<br />
                <br />
                <span>xyz@gmail.com</span>
                </div> */}
                <div className="map-wrap">
                {/* <div className="info-map">
          Gaurav Tripathi,
          <br />
          Ghaziabad,
          <br />
          Branka RadiČevića 19, 22000 <br />
          Sremska Mitrovica <br />
          <br />
          <span>freelancerslobodan@gmail.com</span>
        </div> */}
                <div className="map-wrap2">
                {/* <MapContainer center={[44.96366, 19.61045]} zoom={13}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Marker position={[44.96366, 19.61045]}>
                    <Popup>Sloba lives here, come over for a cup of coffee :)</Popup>
                    </Marker>
                </MapContainer> */}
                {/* <iframe class="gmap_iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=shaheed sthal&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe> */}
                <iframe class="gmap_iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=noida metro&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                </div>
                </div>
            </div>
            }
        </div>
    )
}

export default Contact