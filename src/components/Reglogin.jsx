import React, { useState } from "react";
import imgback from "../images/hand.jpg";
import Reg from "./Reg";
import Log from "./Log";
// ❌ Removed incorrect import of logo.png from ./artimages/logo.png

function Reglogin(props) {
    const [action, setAction] = useState("Login");

    return (
        <div id="reg">
            <div className="innerrg">
                <div className="part1">
                    <img src={imgback} alt="handimg" />
                    <div className="reglogo">
                        {/* ✅ Using public path for logo image */}
                        <img src="/artify-logo-new.png" className="logoaura" alt="logo" />
                        <h2>ARTWORKS</h2>
                    </div>
                </div>
                <div className="content">
                    <h1>WELCOME</h1>
                    <div>
                        {action === "Login" ? <Log /> : <Reg />}
                    </div>
                    <div className="lastline">
                        {action === "Login" ? (
                            <p onClick={() => setAction("Sign up")}>
                                Don't have an account? <span>Sign UP</span>
                            </p>
                        ) : (
                            <p onClick={() => setAction("Login")}>
                                Have an account? <span>Login</span>
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Reglogin;
