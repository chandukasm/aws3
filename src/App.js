import logo from "./logo.svg";
// import "./App.css";
import Amplify from "aws-amplify";
import awsExports from "./aws-exports";
import React from "react";
import {
  AmplifyAuthenticator,
  AmplifySignIn,
  AmplifySignOut,
  AmplifySignUp,
  withAuthenticator,
} from "@aws-amplify/ui-react";
import launchBack from "./images/launchBack.jpg";

Amplify.configure(awsExports);

const App = () => {
  return (
    <div
      className="row"
      style={{
        overflow: "hidden",
      }}
    >
      <div
        class="col-md"
        style={{
          backgroundImage: `url(${launchBack})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          overflow: "hidden",
        }}
      />
      <div class="col-md">
        <AmplifyAuthenticator>
          <AmplifySignIn headerText="VeganLaunch Signin " slot="sign-in" />
          <AmplifySignUp />
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Edit <code>src/App.js</code> and save to reload to enter the
                app.
              </p>
              <AmplifySignOut />
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
            </header>
          </div>
        </AmplifyAuthenticator>
      </div>
    </div>

    // <div
    //   class="row align-items-start"
    //   // style={{
    //   //   backgroundImage: `url(${launchBack})`,
    //   //   height: "100vh",
    //   // }}
    // >
    //   sdkfngsodfbndpjfb
    // </div>
  );
};

export default App;

{
  /* <div
className="col-6"
style={{
  backgroundColor: "red",
}}
>
<AmplifyAuthenticator>
  <AmplifySignIn headerText="VeganLaunch Signin " slot="sign-in" />
  <AmplifySignUp />
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <AmplifySignOut />
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  </div>
</AmplifyAuthenticator>
</div> */
}
