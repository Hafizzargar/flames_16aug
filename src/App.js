import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
  let [first, setfirst] = useState("");
  let [second, setsecond] = useState("");
  let [l_value, setl_value] = useState("");
  let [c, setc] = useState(0);
  function firs(e) {
    return setfirst(e.target.value);
  }

  function secon(e) {
    return setsecond(e.target.value);
  }
  function sub() {
    setc((c = 0));
    if (first.trim() == "" || second.trim() == "") {
      return alert("enter value");
    }

    for (let i of first.toLowerCase()) {
      for (let j of second.toLowerCase()) {
        if (i == j) {
          setc(c++);
        }
      }
    }
    console.log(c);
    if (c >= 6) {
      setc((c = c % 6));
      console.log(c, "here it is");
    }
    setc((c = c - 1));

    if (c == 0) {
      return setl_value("Siblings");
    } else if (c == 1) {
      // <div>Friends</div>
      return setl_value("Friends");
    } else if (c == 2) {
      <div>Love</div>;
      return setl_value("Love");
    } else if (c == 3) {
      // <div>Affection</div>
      return setl_value("Affection");
    } else if (c == 4) {
      return setl_value("Marriage");
    } else if (c == 5) {
      return setl_value("Enemy");
    }
  }
  function rest() {
    setc(0);
    setfirst("");
    setsecond("");
    setl_value("");
  }
  return (
    <div>
      <input
        type="text"
        placeholder="first_name"
        onChange={firs}
        value={first}
        required
      />
      <input
        type="text"
        placeholder="second_name"
        onChange={secon}
        value={second}
        required
      />
      <button onClick={sub} style={{ color: "#6FC1E2" }}>
        Calculate Relationship Future
      </button>
      <button onClick={rest} style={{ color: "#6FC1E2" }}>
        Clear
      </button>

      <div>{l_value}</div>
    </div>
  );
}

export default App;
