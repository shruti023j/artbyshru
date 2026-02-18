import React from "react";
import pics from '../images/paintings.jpg';
import {motion} from "framer-motion";
function Features(){
    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
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
    return(
        <div id="feature">
            <section className="fone">
              <div className="foneimg">
                <img src={pics} alt="handmadepainting"></img></div>
                <h1>FEATURES</h1>
                <h4>Discover the brushstrokes of imagination</h4>
            </section>
            <motion.section className="ftwo"
            variants={container}
            initial="hidden"
            whileInView="visible"
            >
                <motion.div
                className="item"
                variants={item}
                >
                    <h1><span>HIGHLY</span>DETAILED</h1>
                    <h4>Our products are made with very minute details which brings depth and is pleasant to eyes.</h4>
                </motion.div>
                <motion.div 
                className="item"
                variants={item}
                >
                    <h1>
                        <span>FAST</span> SHIPPING
                    </h1>
                    <h4>We make sure the artwork reaches to as soon as it is purchased. We also provide free returns if not liked.</h4>
                </motion.div>
                <motion.div
                className="item"
                variants={item}>
                    <h1>
                    <span>QUALITY</span> ASSURANCE
                    </h1>
                    <h4>We use the best quality products and ensure that the product has not been damaged.</h4>
                </motion.div>
                
            </motion.section>

        </div>
    )
}
export default Features;