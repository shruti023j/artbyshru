import { useState } from "react";

function Template(props){
    const [show, setShow] = useState(false);

    return(
        <>
        <div className="card" onClick={() => setShow(true)}>
            <section className="imagescard">
                <img src={props.plink} className="gtimg" alt="pics" />
            </section>
        </div>

        {show && (
            <div className="popup">
                <div className="popup-box">
                    <span onClick={() => setShow(false)}>❌</span>
                    <img src={props.plink} alt="art" />
                    <h2>{props.title}</h2>
                    <p>{props.desc}</p>
                    <h3>₹ {props.price}</h3>
                </div>
            </div>
        )}
        </>
    )
}
export default Template;
