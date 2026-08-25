import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isRegister, setIsRegister] = useState(false);

  return (
    <div className="nirvan-login">

      {/* LEFT IMAGE / HERO */}
      <section className="login-hero">

        <div className="hero-content">

          <p className="hero-top">
            GEHU • TECHNICAL FEST
          </p>

          <h1>
            NIRVAN <span>'26</span>
          </h1>

          <div className="hero-line"></div>

          <p className="hero-tagline">
            Where Ideas Awaken. Innovation Begins.
          </p>

          <p className="hero-description">
            Step into a world of technology, creativity,
            challenges and unforgettable experiences.
          </p>

        </div>

      </section>


      {/* RIGHT LOGIN BOX */}
      <section className="login-side">

        <div className="login-card">

          <div className="magic-icon">
            ✦
          </div>

          <p className="welcome">
            WELCOME TO
          </p>

          <h2>
            NIRVAN <span>'26</span>
          </h2>

          <p className="login-subtitle">
            {isRegister
              ? "Create your account and join the experience."
              : "Your journey into innovation starts here."}
          </p>

          <div className="gold-divider"></div>


          {/* REGISTER ONLY */}
          {isRegister && (
            <div className="input-group">
              <label>FULL NAME</label>
              <input
                type="text"
                placeholder="Enter your full name"
              />
            </div>
          )}


          {/* EMAIL */}
          <div className="input-group">
            <label>EMAIL ADDRESS</label>
            <input
              type="email"
              placeholder="Enter your email"
            />
          </div>


          {/* PASSWORD */}
          <div className="input-group">
            <label>PASSWORD</label>

            <div className="password-box">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
              >
                {showPassword ? "HIDE" : "SHOW"}
              </button>
            </div>
          </div>


          {/* LOGIN OPTIONS */}
          {!isRegister && (
            <div className="login-options">

              <label className="remember">
                <input type="checkbox" />
                <span>Remember me</span>
              </label>

              <button className="forgot">
                Forgot Password?
              </button>

            </div>
          )}


          {/* REGISTER TERMS */}
          {isRegister && (
            <label className="remember register-check">
              <input type="checkbox" />
              <span>I agree to the terms & conditions</span>
            </label>
          )}


          {/* MAIN BUTTON */}
          <button className="enter-button">
            {isRegister
              ? "CREATE ACCOUNT"
              : "ENTER NIRVAN"}
          </button>


          {/* SWITCH LOGIN / REGISTER */}
          <div className="switch-login">

            <span>
              {isRegister
                ? "Already have an account?"
                : "New to Nirvan?"}
            </span>

            <button
              onClick={() =>
                setIsRegister(!isRegister)
              }
            >
              {isRegister ? "LOGIN" : "REGISTER"}
            </button>

          </div>


          <div className="bottom-text">
            ✦ &nbsp; GEHU • NIRVAN '26 • TECH GEEKS &nbsp; ✦
          </div>

        </div>

      </section>

    </div>
  );
};

export default Login;