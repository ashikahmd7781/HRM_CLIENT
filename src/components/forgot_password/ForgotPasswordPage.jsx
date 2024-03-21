import React from 'react';
import { Link } from 'react-router-dom';
import "./ForgotPassword.css"

function ForgotPasswordPage() {
  

    return (
        <div className="container">
        <div className="row">
            <h1>Forgot Password</h1>
            <h6 className="information-text">Enter your registered email to reset your password.</h6>
            <div className="form-group">
                <input type="email" name="user_email" id="user_email" />
                <p><label htmlFor="username">Email</label></p>
                <button>Reset Password</button>
            </div>
            <div className="footer">
                <h5>New here? <a href="#">Sign Up.</a></h5>
               <h5>Already have an account?  <Link to={"/login"}><a href="#">Sign In.</a></Link></h5>
             
            </div>
        </div>
        </div>
    );
}

export default ForgotPasswordPage;
