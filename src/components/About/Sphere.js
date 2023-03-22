// import React, { useEffect, useRef } from 'react';
// import $ from 'jquery'
// import './jquery.svg3dtagcloud'
// export default function Sphere() {
//     const settings = {
            

//     }

//     const svgEl = useRef()

//     useEffect(() => {
//         const $svgEl = $(svgEl.current)
//         $svgEl.svg3DTagCloud(settings)
//     }, [])

//     return (
//         <div id="tagcloud" ref={svgEl}></div>
//     );

// }
import React from 'react'
// import TagCloud from 'react3dtagcloud'
import './Sphere.scss';
import TagCloud from './TagCloud.js'
class Sphere extends React.Component {
  render() {
    const tagName = ['java', 'javscript', 'C', 'C++','HTML','SQL','React','Word','Typing','Problem Solving','Data-Structures','BootStrap','Git','Git-Hub']
    // const tag2=[tagName.map(function(item){return '<a>'+ item+'</a>'})]
	  return (
		<div className="Sphere-3d">
            <div className="wrapper">
		  {/* <TagCloud tagName={tagName} radius={200} className='tagCloud'></TagCloud> */}
          <TagCloud tagName={tagName} className='tagCloud'/>
          </div>
		</div>
	  )
   }
}

export default Sphere;