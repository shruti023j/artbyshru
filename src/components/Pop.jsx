import React from "react";
import Popup from 'reactjs-popup';
function Pop(){
    return(
        <Popup className="pop" id="popreg" trigger={<h1>You have Successfully Registered! Please Login to continue..</h1>}>
            {alert("You have successfully registered!!")}
        </Popup>
    )
}
export default Pop;