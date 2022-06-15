import React from "react";
import "../styles/App.css";
import Input from "./Input";
import { useState } from "react";

const array = [1, 2, 3, 4, 5, 6];

const App = () => {

 

  return (
    <div id="main">
      <h1>Verify your Account</h1>
      <p>
        We emailed you the six digit code to cool_guy@email.com
        <br />
        Enter the code below to confirm your email address{" "}
      </p>
      <div className="otp">
        {array.map((element) => (
          <Input  />
        ))}
      </div>
      <p className="helper">
        This is design only. We didn't actually send you an email as we
        <br /> don't have your email, right?
      </p>
    </div>
  );
};

export default App;
