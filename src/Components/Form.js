import React,{useEffect, useState} from "react";

const Form = () => {
    const [email, setEmail] = useState("");
    const [emailerror, setEmailError] = useState("Enter Valid Email");

    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("Password must have atleast 8 characters");

    const [confirmpassword, setConfirmpassword] = useState("");
    const [conPassError, setconPassError] = useState("Password didn't match");


    useEffect(() => {
        validateEmail(email);
    },[email]);

    useEffect(() => {
        validatePassword(password, confirmpassword);
    },[password, confirmpassword])

    function validateForm(event){
        event.preventDefault();
        if(validateEmail(email) && validatePassword(password, confirmpassword)){
            
            alert("Form Submitted Successfully");
        }
        else{
            alert("Cannot submit. There is Some Issue")
        }
    }

    return(
        <form className="myform" >
            <label>Email : </label>
            <input 
                className="inputs" 
                id="emailid"
                type="text" 
                placeholder="Enter Your Email"
                onChange={e => {
                    setEmail(e.target.value)
                }}
            >
            </input>
            <p className="message">{emailerror}</p>
            <br/>

            <label>Password : </label>
            <input 
                className="inputs" 
                id="passwordid"
                type="password" 
                placeholder="Enter Your Password"
                onChange={e => {
                    setPassword(e.target.value)
                }}
            >
            </input>
            <p className="message">{passwordError}</p>
            <br/>

            <label>Confirm Password : </label>
            <input 
                className="inputs"
                id="conpassid" 
                type="password" 
                placeholder="Enter Confirm Password"
                onChange={e => {
                    setConfirmpassword(e.target.value)
                }}
            >
            </input>
            <p className="message">{conPassError}</p>
            <br/>

            <button onClick={validateForm} className="button">Submit</button>
        </form>
    );



    //validating email
    function validateEmail(mail){
        let validEmail = false;

        const regex = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)?$/;
        if(regex.test(mail)){
            setEmailError('');
            document.getElementById('emailid').style.borderColor="green";
            validEmail = true;
        }
        else{
            setEmailError('Enter Valid Email');
            document.getElementById('emailid').style.borderColor="red";
            validEmail = false;
        }
        return validEmail
    }

    //validating password and confirm password
    function validatePassword(pass, conPass){
        let validPass = false, validCon = false;


        const regex = /^([a-zA-Z0-9]+)/;
        if(regex.test(pass) && (pass.length >= 8)){
            setPasswordError('');
            document.getElementById('passwordid').style.borderColor="green";
            validPass = true;
        }
        else{
            setPasswordError('Password must have atleast 8 characters');
            document.getElementById('passwordid').style.borderColor="red";
            validPass = false;
        }


        if(pass && pass == conPass && pass.length == conPass.length){
            setconPassError('');
            document.getElementById('conpassid').style.borderColor="green";
            validCon = true;
        }
        else{
            setconPassError("Password didn't match");
            document.getElementById('conpassid').style.borderColor="red";
            validCon = false;
        }

        return (validPass && validCon);
    }

}
export default Form;