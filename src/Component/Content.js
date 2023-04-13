import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

const Content = () => {
  const [name, setName] = useState("moiz");
  const [count, setCount] = useState(0);
  const handleChangeName = () => {
    const names = ["moiz", "saad", "ali"];
    const int = Math.floor(Math.random() * 3);
    setName(names[int]);
  };
  const handleClick1 = () => {
    setCount(count + 1);
    console.log(count);
  };
  const handleClick2 = () => {
    console.log(count);
  };
  return (
    <>
      Hello {name}
      <button onClick={handleChangeName}>Change name</button>
      <button onClick={handleClick1}>Click 1</button>
      <button onClick={handleClick2}>Click 2</button>
      <FaTrashAlt />
    </>
  );
};

export default Content;
