import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import AuthState from "./context/authState";
import Auth from "./Auth";

function App() {
  return (
    <AuthState>
      <div className="App">
        <Auth />
      </div>
    </AuthState>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
