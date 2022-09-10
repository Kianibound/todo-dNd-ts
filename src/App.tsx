import React from "react";
import "./App.css";
import InputFields from "./components/Input/InputFields";

const App: React.FC = () => {
  return (
    <div className="App">
      <header>
        <h1 className="heading">Testify</h1>
      </header>
      <InputFields />
    </div>
  );
};

export default App;
