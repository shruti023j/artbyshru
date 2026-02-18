import React, { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth} from "../firebase";
import { useNavigate } from "react-router-dom";
function Reg(props){
    const navigate=useNavigate();
    const [values,setValues]=useState({
        name:"",
        email:"",
        pass:"",
    });
    const [errorMsg,setErrorMsg]=useState("");
    const [submitDisable,setSubmitDisable]=useState(false);
    const handleSubmission=()=>{
        if(!values.name || !values.email || !values.pass){
            setErrorMsg("Fill all fields");
            return
        }
        setErrorMsg("");
        setSubmitDisable(true);
        createUserWithEmailAndPassword(auth,values.email,values.pass)
        .then(async (res)=>{
            setSubmitDisable(false);
            const user=res.user;
            await updateProfile(user,{
                displayName:values.name,
            });
            alert("Your account has been successfully created!!");
            navigate("/");
        }).catch((err)=>{
            setSubmitDisable(false);
            setErrorMsg(err.message);
        });
    };
    return(
        <div className="content" id="signup">
            <p>Sign up to get in the moment updates on our exquisite<br></br> art collection.</p>
            <form className="fm">
                <div>
                <input type="text" placeholder="Username" id="user inp" 
                onChange={(event)=>
                    setValues((prev)=>({...prev,name:event.target.value}))}
                ></input><br></br></div>
                <div><input type="email" placeholder="Email" id="mail inp" onChange={(event)=>
                    setValues((prev)=>({...prev,email:event.target.value}))}></input><br></br></div>
                <div>
                <input type="password" placeholder="Password" id="pass inp"
                onChange={(event)=>
                    setValues((prev)=>({...prev,pass:event.target.value}))}
                ></input><br></br>
                </div>
                <b className="errormessage">{errorMsg}</b>
                <button onClick={ handleSubmission} disabled={submitDisable}>Sign up</button>
            </form>
        </div>
    )
}
export default Reg;