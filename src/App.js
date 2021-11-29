import { useEffect, useState } from "react";
import "./styles.css";
import Title from "./Title.js";
import Form from "./Form.js";
import Info from "./Info.js";

export default function App() {
  const [name, setName] = useState("");
  const [data, setData] = useState("");

  useEffect(() => {
    const url = `https://api.adviceslip.com/advice/search/${name}`;
    fetch(url)
      .then((r) => r.json())
      .then((r) => setData(r))
      .catch((e) => setData(null));
  }, [name]);

  return (
    <div className="App">
      <Title text="There's no price for good advice!" />
      <img src="https://www.pngkit.com/png/full/368-3684382_main-lucy-lucy-and-snoopy-psychiatric-help.png" />
      <Form setName={setName} />
      <Info data={data} />
    </div>
  );
}
