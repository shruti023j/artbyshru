import React, { useRef } from 'react';
import ReactPlayer from 'react-player';
import whiteline from "../images/linewhite.png"
import {motion} from "framer-motion";

const VIDEO_PATH = 'https://youtu.be/RlS8rqOXPDk?si=Tc4ZJ--UBk4vFeRw';
function About(){
    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            delayChildren: 0.3,
            staggerChildren: 0.5
          }
        }
      };
      
      const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1,
          transition: {
            delayChildren: 0.3,
            staggerChildren: 0.5
          }
        }
      };
      const itemcar={
        hidden: { x: -40, opacity: 0 },
        visible: {
          x: 0,
          opacity: 1,
          transition: {
            delayChildren: 0.3,
            staggerChildren: 0.5
          }
        }
      };
    const playerref=useRef(null);
    return(
        <div id='about'>
            <motion.section className='first'
            >
            <motion.h1 initial="hidden" variants={container} whileInView="visible">ABOUT US</motion.h1>
            <motion.p
            variants={itemcar}
            initial="hidden" 
            whileInView="visible">
             welcome to our website—a space dedicated to showcasing art and connecting with fellow art lovers. Our aim is to create and share detailed artwork for both the community and our clients. We bring together amazing creations on one easy-to-access platform.
            <br></br>
            Artify was established in 2025 to spread art globally and offer high-quality pieces to art admirers. We continuously improve our skills and contribute to the art world through dedication. Our work includes pencil art, acrylic, and watercolor. We make sketches, paintings, and also take custom orders.
            <br></br>
            For additional information, please contact us through the platforms listed below.
            </motion.p>
            <motion.img src={whiteline} className='whline' variants={item} initial="hidden" 
            whileInView="visible"></motion.img>
            <h3>Mail to: <a href="https://www.instagram.com/" className='linkabout'>shrutivaishkiyar562@gmail.com</a></h3>
            <h3>Instagram id: <a href="mailto:shrutivaishkiyar562@gmail.com" className='linkabout'>@artify_artworks</a></h3>
            </motion.section>
            <section className='second'>
                <ReactPlayer ref={playerref} url={VIDEO_PATH} controls={true} className="vdo"/>
                <button>FOLLOW</button>
                <div className='rec'></div>

            </section>
        </div>
    )
}
export default About;