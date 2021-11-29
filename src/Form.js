import { useState } from "react";
import "./styles.css";

export default function Form({ setName }) {
  const [content, setContent] = useState("");

  return (
    <div className="card">
      <input className="input" onChange={(e) => setContent(e.target.value)} />
      <button className="button" onClick={() => setName(content)}>
        Get Advice
      </button>
    </div>
  );
}
