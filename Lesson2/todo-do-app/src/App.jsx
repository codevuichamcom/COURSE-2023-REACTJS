import { useState } from "react";
import "./App.css";

const products = [
  { title: "Cabbage", isFruit: true, id: 1 },
  { title: "Garlic", isFruit: true, id: 2 },
  { title: "Apple", isFruit: true, id: 3 },
];

function Button() {
  const [toggle, setToggle] = useState(false);
  const onClick = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <button onClick={onClick}>Toggle</button>
      {toggle && (
        <div>
          This is my contents:
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
            itaque? Assumenda magni officiis velit vero sequi officia
            repellendus voluptatem, atque nostrum natus deserunt debitis
            expedita quidem, labore quis nemo voluptate? Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Voluptatem, itaque? Assumenda
            magni officiis velit vero sequi officia repellendus voluptatem,
            atque nostrum natus deserunt debitis expedita quidem, labore quis
            nemo voluptate? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Voluptatem, itaque? Assumenda magni officiis velit vero sequi
            officia repellendus voluptatem, atque nostrum natus deserunt debitis
            expedita quidem, labore quis nemo voluptate?
          </p>
        </div>
      )}
    </>
  );
}

function App() {
  return (
    <>
      <Button />
    </>
  );
}

export default App;
