import React from 'react';
import "./LoginReg.css";

function LoginReg() {
  return (
      <>
        <h1 className='text-center pt-5'>Login and Registration Page</h1>

        <div className="container logMain-container">
              
          <div className="row">
            {/* Login container */}
            
            <div className="col-6 px-5 loginBox">
            <h3>Login to our Website</h3>
              <p>Enter Username and Password to log on</p>
              {/* Input Username */}
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1"><i className="loginIcon fa-solid fa-user"></i></span>
                <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
              </div>
                {/* Input Password */}
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1"><i className="loginIcon fa-solid fa-key"></i></span>
                <input type="Password" className="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1"/>
              </div>

              <button type="button" className="btn btn-primary loginBtn mb-5">Sign in</button>
            
            <h4 className='text-center mb-5'>OR</h4>

              <div class="d-grid gap-2">
                  <button class="btn btn-primary" type="button">Facebook</button>
                  <button class="btn btn-danger" type="button">Google</button>
              </div>


            </div>

            {/* Registration container */}
            <div className="col-6 px-5 regBox">
              <h3>Registration Form</h3>
              <p>Please fill the following with your personal information</p>

            <div className="row mb-3">
              {/* Input First name */}
              <div className="col">
                <input type="text" className="form-control" id="InputFirstname" aria-describedby="Firstname" placeholder="Firstname" />
              </div>    
                  
                {/* Input Last name */}
              <div className="col">
                <input type="text" className="form-control" id="InputLastname" aria-describedby="Lastname" placeholder="Lastname" />
              </div>   
            </div>  

            <div className="row mb-3">
              {/* Input Password */}
              <div className="col">
                <input type="password" className="form-control" id="InputPassword" aria-describedby="Password" placeholder="Password"/>
              </div>    
                  
                {/* Input Confirm Password */}
              <div className="col">
                <input type="password" className="form-control" id="InputconfirmPassword" aria-describedby="InputconfirmPassword" placeholder="Confirm Password"/>
              </div>
            </div>     
                  
                  {/* Input Email Address */}
            <div className="mb-3">
              <input type="email" className="form-control" id="InputEmail1" aria-describedby="emailHelp" placeholder="Email address" />
              <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
              </div>   
            </div> 

            <div className="row mb-3">
              {/* Birth Month*/}
              <div className="col-4">
                <input type="date" className="form-control" id="InputBirthday" aria-describedby="birthday" placeholder="Birthday" />
              </div>    
                  
                {/* Birth day */}
              <div className="col-8">
                <input type="number" className="form-control" id="InputContact" aria-describedby="Contact" placeholder="Contact number" />
              </div>   
            </div>

            <div className="row mb-3">
              {/* Address*/}
              <div className="col-8">
                <input type="text" className="form-control" id="InputAddress" aria-describedby="Address" placeholder="Address" />
              </div>    
                  
                {/* City */}
                <div className="dropdown col-4">
                  <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    City
                  </button>
                  <ul className="dropdown-menu">
                    <li><button className="dropdown-item" type="button">Caloocan City</button></li>
                    <li><button className="dropdown-item" type="button">Quezon CIty</button></li>
                    <li><button className="dropdown-item" type="button">Quezon Province</button></li>
                  </ul>
                </div>
            </div>

          <div className='row'>
            {/* Country */}
            <div className="dropdown col-6">
                  <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Country
                  </button>
                  <ul className="dropdown-menu">
                    <li><button className="dropdown-item" type="button">Philippines</button></li>
                    <li><button className="dropdown-item" type="button">Europe</button></li>
                    <li><button className="dropdown-item" type="button">USA</button></li>
                  </ul>
                </div>

                {/* Zip */}
              <div className="col-6">
                <input type="number" className="form-control" id="InputZip" aria-describedby="Zip" placeholder="Zip code" />
              </div> 
          </div>

          <button type="button" className="btn btn-primary regBtn">Register</button>

          </div>  
        </div>
      </div>
    </>
  )
}

export default LoginReg