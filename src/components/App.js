import React, { useEffect, useRef, useState } from "react";
import "../styles/App.css";

//passwordCheck Function returns a object with the following properties:
//length-> boolean (true if password length > 8)
//number-> boolean (true if number in password)
//lowercase-> boolean (true if lowercase letter in password)
//uppercase-> boolean (true if uppercase letter in password)
//special-> boolean (true if special character in password)

//strength-> number (1-5 depending on password strength)
//Cases for strength values (div with id "strength-value"):
//1-> color: #de1616 width: 20%
//2-> color: #de1616 width: 40%
//3-> color: #FFA200 width: 60%
//4-> color: #FFA200 width: 80%
//5-> color: #06bf06 width: 100%
//Empty password-> color: #de1616 width: 10et strength = 0;

function passwordCheck(password) {
  let strength = 0;
  let passParameters = {
    length: false,
    number: false,
    lowercase: false,
    uppercase: false,
    special: false,
  };
  if (password.length >= 8) passParameters.length = true;

  if (password.match(/(?=.*[0-9])/)) passParameters.number = true;

  if (password.match(/(?=.*[!,%,&,@,#,$,^,*,?,_,~,<,>,])/))
    passParameters.special = true;

  if (password.match(/(?=.*[a-z])/)) passParameters.lowercase = true;

  if (password.match(/(?=.*[A-Z])/)) passParameters.uppercase = true;

  Object.keys(passParameters).forEach((key) => {
    if (passParameters[key] == true) strength++;
  });
  passParameters.strength = strength;
  return passParameters;
}

const PasswordMeter = () => {
  return (
    <div id="meter">
      <input
        type="password"
        id="passbox"
        placeholder="Enter Your Password Here"
      />
      <div id="strength-bar">
        <div id="strength-value"></div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div id="main">
      <div className="card">
        <h1>Check Password Strength</h1>
        <PasswordMeter />
        <ul>
          {/* Conditionally add classname of "checked" to the i tags if the written condition is satisfied in the password. */}
          <li id="lowercase">
            <i className={`fa fa-check`}></i>
            <span>Password should contain at least one lowercase letter</span>
          </li>
          <li id="length">
            <i className={`fa fa-check`}></i>
            <span>Password should be at least 8 characters long</span>
          </li>
          <li id="number">
            <i className={`fa fa-check`}></i>
            <span>Password should contain at least one number</span>
          </li>
          <li id="special">
            <i className={`fa fa-check`}></i>
            <span>Password should contain at least one special character</span>
          </li>

          <li id="uppercase">
            <i className={`fa fa-check`}></i>
            <span>Password should contain at least one uppercase letter</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default App;
