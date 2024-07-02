import {useState,useRef} from "react";
import "./register.css"
function Register(){

  const [email,setemail] = useState("");
  const [password,setpassword] = useState("");

  const emailref = useRef();
  const passwordref = useRef();

  const handlestart = () =>{
    setemail(emailref.current.value);
  }

  const handlefinish = () =>{
    setpassword(passwordref.current.value);
  }

  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="" className="logo" />
          <button className="loginbutton">Sign In</button>
        </div>
      </div>
      <center>
      <div className="container">
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        {!email ? (
          <div className="input">
            <input type="email" placeholder="email address" ref={emailref} />
            <button className="registerbutton" onClick={handlestart}>Get Started</button>
          </div>
        ) : (
          <form className="input">
            <input type="password" placeholder="password" ref={passwordref} />
            <buton className="registerbutton" onClick={handlefinish}>Start</buton>
          </form>
        )}
      </div>
      </center>

    </div>
  );

}
export default Register;