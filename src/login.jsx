import "./login.css";

function Login() {
  return (
    <div className="login" style={{overflow:'hidden'}}>
      <div className="top">
        <div className="wrapper">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" 
            alt="Netflix Logo" 
            className="logo" 
          />
        </div>
      </div>
      <div className="container" style={{marginLeft:'500px',marginTop:'120px'}}>
        <form>
          <h1 style={{marginLeft:'-10px',fontSize:'45px' ,alignItems:'center'}}>Sign In</h1>
          <input type="email" placeholder="Email or Phone number" />
          <input type="password" placeholder="Password" />
          <button className="loginButton">Sign In</button>
          <span>
            New to Netflix? <b>Sign up now.</b>
          </span>
          <small>
            This page is protected by Google reCAPTCHA to ensure you're not a bot. <b>Learn more</b>.
          </small>
        </form>
      </div>
    </div>
  );
}

export default Login;
