import './signup.css';

function Signup() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className=" col-md-5 welcome-col">
            <div className="row ">
            <img src="assets/logo.png" alt="Description"/>
            </div>
            <div className="row welcome-text text-center  ">
                <p className="text1">Hi there!</p>
                <p className="text2">To continue with Le Nkap, please enter your personal info</p>
            </div>

        </div>
        <div className=" col-md-7 ">
            <div className="row text-center ">
                <p className="login-text mt-5 mb-5">Login</p>
                <form>
                <div class="mb-4 ">
                  <input class="form-control form-control-lg input-field" type="text" placeholder="Name" aria-label=".form-control-lg example"  />    
                </div>
                <div class="mb-5 ">
                  <input class="form-control form-control-lg input-field" type="text" placeholder="Name" aria-label=".form-control-lg example"  />    
                </div>
                <a href="#"  class="btn btn-sm button" >Signup</a>
                <p></p>
                </form>


            </div>

      </div>
      </div>
    </div>
  );
}

export default Signup;
