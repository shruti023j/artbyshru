import React from "react";
import { Link } from "react-router-dom";

function Artpart() {
  // Array of image filenames (stored in public/artimages/)
  const images = [
    "IMG20230408132658.jpg",
    "jm3.jpg",
    "k2.jpg",
    "rajatsketch.jpeg",
    "s1.jpg",
    "shipwithwall.jpeg",
    "robertdowry.jpeg",
    "picwetland.jpeg",
    "jackson.webp",
    "CE.jpg",
    "akbolly.jpeg",
    "jjj.jpg",
    "Maa.jpg"
  ];

  return (
    <div id="art">
      {/* First slider */}
      <div className="slider">
        <div className="images">
          {images.map((img, index) => (
            <img key={index} src={`/artimages/${img}`} alt="selfmadeart" />
          ))}
        </div>
      </div>

      <h1>OUR ART</h1>
      <h4>Love painting the sweetest strokes</h4>

      <Link to="" onClick={() => (window.location.href = "/artgallery")}>
        <div className="rec"></div>
      </Link>
      <button>View Our Gallery</button>

      {/* Second slider */}
      <div className="slider">
        <div className="images part2">
          {images.map((img, index) => (
            <img key={index} src={`/artimages/${img}`} alt="selfmadeart" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Artpart;
