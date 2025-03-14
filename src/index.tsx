import * as esbuild from "esbuild-wasm";
import { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";

const el = document.getElementById("root");

const root = ReactDOM.createRoot(el!);

const App = () => {
  const ref = useRef<any>();
  const [input, setInput] = useState("");
  const [code, setCode] = useState("");

  const startService = async () => {
    ref.current = await esbuild.startService({
      worker: true,
      wasmURL: "/esbuild.wasm",
    });
    return service;
  };

  useEffect(() => {
    startService().then((service) => {
      console.log(service);
    });
  }, []);

  const OnClick = async () => {
    if (!ref.current) {
      return;
      }
    };


  const onClick = () => {
    console.log(input);
  };
  return <div>
    <textarea value={input} onChange={(e) => setInput(e.target.value)}></textarea>
    <div>
      <button onClick={onClick}>Submit</button>
    </div>
    <pre>{code}</pre>
  </div>;
};

root.render(<App />);
