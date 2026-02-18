import React from "react";
import handpic from "../images/handout.png";
import brimg from "../images/Groupbr.png";
import {motion} from "framer-motion";
function Careers(){
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
          opacity: 1
        }
      };
      const itemcar={
        hidden: { x: -20, opacity: 0 },
        visible: {
          x: 20,
          opacity: 1
        }
      };

    return(
        <div id="car">
            <img src={handpic} alt="handout from board"></img>
            <motion.div className="contcar" 
            initial="hidden"
            variants={container}
            whileInView="visible">
                <motion.h1
                 variants={itemcar} >CAREERS</motion.h1>
                <motion.h4
                 variants={itemcar} >Embark on a journey to turn your passion into a profession!</motion.h4>
                <motion.p
                 variants={itemcar} 
                 >Our upcoming careers program will soon offer you the chance to register and showcase your art, connecting you with a global audience. Stay tuned for updates on how to become a featured artist and monetize your creativity. Your artistic career is just a click away!</motion.p>
                <motion.img src={brimg} className="carimg1"
                variants={itemcar}></motion.img>
                <motion.h2
                variants={item} 
                >
                COMING YOUR WAY SOON </motion.h2>
                <motion.img src={brimg} className="carimg2"
                variants={itemcar}></motion.img>
            </motion.div>
        </div>
    )
}
export default Careers;