import { useState } from "react";
import Clock from "./components/Clock";

import "./styles.css";

export default function App() {
  const [showClock, setShowClock] = useState();

  return (
    <div className="App">
      <Clock />
      <button type="button" onClick={() => setShowClock(!showClock)}>
        {" "}
        HEURE{" "}
      </button>
    </div>
  );
}
