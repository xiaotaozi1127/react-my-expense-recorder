import { useState, useEffect } from "react";

function Example() {
  const [count, setCount] = useState(0);
  const [heading, setHeading] = useState("hello");
  useEffect(() => {
    console.log("use effect runs!!");
    document.title = `you cliked ${count} times!`;
  }, [count]);

  return (
    <div>
      <p>you clicked {count} times.</p>
      <p>{heading}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        click me!
      </button>
      <button onClick={() => setHeading("heading - " + Math.random() * 100)}>
        change heading
      </button>
    </div>
  );
}

export default Example;
