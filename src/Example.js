import { useState, useEffect } from "react";

function Example() {
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState("hello");
  useEffect(() => {
    console.log("use effect runs!!");
    document.title = `you cliked ${count} times!`;
  }, [count]);

  return (
    <div>
      <p>you clicked {count} times.</p>
      <p>{title}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        click me!
      </button>
      <button onClick={() => setTitle("new title")}>change title</button>
    </div>
  );
}

export default Example;
