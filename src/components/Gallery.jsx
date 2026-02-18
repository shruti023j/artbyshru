import React, { useState } from "react";
import paint from "./paint";
import { AnimatePresence, motion } from "framer-motion";

function Gallery() {
  const [selectedId, setSelectedId] = useState(null);

  const handleOrderSketch = () => {
    alert("Redirecting to Order Sketch page...");
  };

  const handleOrderPainting = () => {
    alert("Redirecting to Order Painting page...");
  };

  const handleAddToCart = (item) => {
    alert(`${item.name} added to cart!`);
  };

  const handleBuyNow = (item) => {
    alert(`Proceeding to checkout for ${item.name}`);
  };

  return (
    <>
      <div id="gallery">
        <div className="container">
          <h1>ART GALLERY</h1>
          <div className="gbut">
            <button onClick={handleOrderSketch}>Order a Sketch</button>
            <button onClick={handleOrderPainting}>Order a Painting</button>
          </div>
          <div className="blackbox"></div>
          <div className="bb2"></div>
        </div>
        <div className="contogg">
          {paint.map((item) => (
            <motion.div className="card" key={item.id}>
              <motion.section
                className="imagescard"
                layoutId={item.id}
                onClick={() => setSelectedId(item.id)}
              >
                <motion.img src={item.plink} className="gtimg" alt={item.name} />
              </motion.section>
            </motion.div>
          ))}
          <AnimatePresence>
            {selectedId && (
              <motion.div className="expcard">
                {paint.map(
                  (item) =>
                    item.id === selectedId && (
                      <motion.div layoutId={selectedId} className="details" key={item.id}>
                        <motion.div className="imgdiv">
                          <motion.img src={item.plink} className="expimg" alt={item.name} />
                        </motion.div>
                        <motion.div className="detail">
                          <motion.h1>{item.name}</motion.h1>
                          <motion.p>
                            <span className="pdeschead">Description</span>
                            <br />
                            {item.disciption}
                          </motion.p>
                          <motion.h4>Price: {item.price}</motion.h4>
                          <motion.div className="g-button">
                            <motion.button onClick={() => handleAddToCart(item)}>
                              Add to cart
                            </motion.button>
                            <motion.button onClick={() => handleBuyNow(item)}>
                              Buy now
                            </motion.button>
                          </motion.div>
                        </motion.div>
                      </motion.div>
                    )
                )}
                <motion.button onClick={() => setSelectedId(null)} className="but end">
                  X
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}

export default Gallery;
