import React from "react";
import pinterest from "../images/pin.png";
import facebook from "../images/facebook.png";
import instagram from "../images/instagram.png";
import gmail from "../images/gmail.webp";

function Footer() {
    return (
        <>
            <footer>
                <div className="footpart1">
                    <div className="headf">
                        <h1>
                            ARTIFY

                        </h1>
                        <p>Stay up to date with Latest Artworks and News</p>
                        <h3>shrutivaishkiyar562@gmail.com</h3>
                    </div>

                    <form>
                        <h1>Contact us</h1>
                        <p>Feel free to write to us. We will get back to you shortly.</p>
                        <input placeholder="Name" className="in" /><br />
                        <input placeholder="Email" className="in" /><br />
                        <input placeholder="Message" className="msg" /><br />
                        <button type="submit">SEND</button>
                    </form>

                    <div className="follow">
                        <h5>FOLLOW</h5>
                        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                            <img src={instagram} className="icon" alt="Instagram" />
                        </a>
                        <a href="mailto:shrutivaishkiyar562@gmail.com">
                            <img src={pinterest} className="icon" alt="Pinterest" />
                        </a>
                        <a href="https://in.pinterest.com/shruti023j/" target="_blank" rel="noreferrer">
                            <img src={gmail} className="icon" alt="Gmail" />
                        </a>
                        <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                            <img src={facebook} className="icon" alt="Facebook" />
                        </a>
                    </div>
                </div>

                <div className="footpart2">
                    <ul>
                        <li>TERMS & CONDITIONS</li>
                        <li>PRIVACY POLICY</li>
                        <li>ARTWORKS</li>
                    </ul>
                    <p>
                        Copyright 2025 @ Artify<br />
                        Website developed by Shruti Kumari
                    </p>
                </div>
            </footer>
        </>
    );
}

export default Footer;