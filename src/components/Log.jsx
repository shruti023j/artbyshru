import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../firebase";
// import Popup from "reactjs-popup";
// import Reglogin from "./Reglogin";
function Log(props){
    const navigate=useNavigate();
    const [values,setValues]=useState({
        email:"",
        pass:"",
    });
    const [errorMsg, setErrorMsg]=useState("");
    const [submitDisable,setSubmitDisable]=useState(false);
    const handleSubmission=()=>{
        if(!values.email || !values.pass){
            setErrorMsg("Fill all fields");
            return
        }
        setErrorMsg("");
        setSubmitDisable(true);
        signInWithEmailAndPassword(auth, values.email,values.pass)
        .then(async (res)=>{
            setSubmitDisable(false);
            
            alert("You have successfully logged in!!")
            navigate("/");
        })
        .catch((err)=>{
            setSubmitDisable(false);
            alert(err.message+"Please Sign up!");
            setErrorMsg(err.message);
        });
    };
    return(
        <div className="content" id="login">
            <p>Login to get in the moment updates on our exquisite<br></br> art collection.</p>
            <form className="fm">
                <div>
                <input type="email" placeholder="Email" id="email inp" 
                onChange={(event)=>
                    setValues((prev)=>({...prev,email:event.target.value}))}
                ></input><br></br></div>
                <div>
                <input type="password" placeholder="Password" id="pass inp"
                onChange={(event)=>
                    setValues((prev)=>({...prev,pass:event.target.value}))}
                ></input><br></br>
                </div>
                <b className="errormessage">{errorMsg}</b>
                <button disabled={submitDisable} onClick={handleSubmission}>Login</button>
            </form>
        </div>
    )
}
export default Log;