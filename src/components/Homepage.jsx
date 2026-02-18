import React from 'react';
// import logo from '../images/brushes.jpg';
import pic from '../images/martin.jpg';
import Artpart from './Artpart';
import About from './About';
import Features from './Features';
import Careers from './Careers';
import {motion} from "framer-motion";
import {TypeAnimation} from "react-type-animation";

function Homepage(){
    // const container = {
    //     hidden: { opacity: 1, scale: 0 },
    //     visible: {
    //       opacity: 1,
    //       scale: 1,
    //       transition: {
    //         delayChildren: 0.5,
    //         staggerChildren: 0.5
    //       }
    //     }
    //   };
      
      const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1
        }
      };
    return(
    <>
    <div id="main">
        {/* <div className='bgimage'></div> */}
       
        <h2>WELCOME TO OUR 
            <br></br><span className='aword'>ART</span> GALLERY
        </h2>
        <h3>
        <TypeAnimation
          sequence={[
            "Where art comes to life...",1000,
            "Where creativity takes courage...",1000,
            "Where there is no reason to paint...",1000,
            "Where you talk through colors...",1000
          ]}
          wrapper='span'
          speed={50}
          style={{fontSize:"1em"}}
          repeat={Infinity}
          />
        </h3>
    </div>
    <motion.div id="extra"
    // variants={container}
    initial="hidden"
    // className="container"
    whileInView="visible"
    >
            <motion.div>
            <img src={pic} alt='gallerypic'></img>
            </motion.div>
            <motion.h1
                className="extraitem"
                variants={item}
            >
                AN ARTIST IS NOT
                <br></br>
                PAID FOR HIS<br></br>
                LABOR BUT FOR HIS<br></br>
                VISION
            </motion.h1>
    </motion.div>
    <About/>
    <Artpart/>
    <Features/>
    <Careers/>
    </>
    )
}
export default Homepage;