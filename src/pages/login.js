import './login.css';

function Login() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className=" col-md-5 welcome-col">
            <div className="row ">
            {/* <img src={require('./logo.png')} alt="Description"/> */}
            </div>
            <div className="row welcome-text text-center  ">
                <p className="text1">Welcome Back!</p>
                <p className="text2">To continue with Le Nkap, please enter your personal info</p>
            </div>

        </div>
        <div className=" col-md-7 d-flex align-items-center">
            <div className="row text-center ">
                <p className="login-text  mb-5">Login</p>
                <form>
                <div class="mb-4 d-flex justify-content-center">
                  <input class="form-control form-control-lg input-field" type="text" placeholder="Name" aria-label=".form-control-lg example"  />    
                </div>
                <div class="mb-5 d-flex justify-content-center my-auto ">
                  <input class="form-control form-control-lg input-field" type="text" placeholder="Name" aria-label=".form-control-lg example"  />    
                </div>
                <p className="forgot-password">Forgot password?</p>
                <a href="#"  class="btn btn-sm button" >Login</a>
               
                </form>


            </div>

      </div>
      </div>
    </div>
  );
}

export default Login;
