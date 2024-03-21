import React from 'react';
import "./ResetPassword.css"

export default function ResetPasswordPage() {
  return (
    <div className="container" style={{ marginTop: '40px' }}>
      <div className="row">
        <div className="col-sm-12">
          <div className="horizontal-container">
            <div className="progress-bar-container">
              <div className="custom-progress-line" style={{ width: '25%' }}></div>
              <ul className="custom-progress-bar clearfix">
                <li className="active">Reset password</li>
                <li>Login</li>
                <li className="finish-line"></li>
              </ul>
            </div>
            <div className="horizontal-form-box">
              <div className="horizontal-info-container text-center">
                <img src="https://static.stayjapan.com/assets/top/icon/values-7dd5c8966d7a6bf57dc4bcd11b2156e82a4fd0da94a26aecb560b6949efad2be.svg" alt="Password Reset Icon" />
                <p className="horizontal-heading">Reset your password</p>
                <p className="horizontal-subtitle">Your password needs to be at least 8 characters.</p>
              </div>
              <form className="horizontal-form">
                <div className="o3-form-group">
                  <label htmlFor="new_password">New password</label>
                  <input type="password" className="o3-form-control o3-input-lg" id="new_password" />
                </div>
                <div className="o3-form-group">
                  <label htmlFor="confirm_password">Confirm new password</label>
                  <input type="password" className="o3-form-control o3-input-lg" id="confirm_password" />
                </div>
                <button className="o3-btn o3-btn-primary o3-btn-block">Set new password</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


