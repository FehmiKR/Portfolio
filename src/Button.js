import { useState } from "react";

export default function Button() {
  const [nbclick, setClickNumber] = useState(0);

  function click() {
    setClickNumber(nbclick + 1);
  }

  return (
    <>
      <button onClick={click}>Click Here</button>
      <br />
      <b>Clicked {nbclick} times </b>
    </>
  );
}
