import React, { useEffect, useState } from "react";
import { add } from "../../utilies/calculate";
import Cosmetic from "../Cosmetic/Cosmetic";

const Cosmetics = () => {
  const [cosmetics, setCosmetics] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setCosmetics(data));
  }, []);
  //   const first = 55;
  //   const second = 66;
  //   const total = add(first, second);

  return (
    <div>
      <h1>Welcome to cosmetics store</h1>
      {/* <p>Total:{total}</p> */}
      {cosmetics.map((cosmetic) => (
        <Cosmetic key={cosmetic.id} cosmetic={cosmetic}></Cosmetic>
      ))}
    </div>
  );
};

export default Cosmetics;
