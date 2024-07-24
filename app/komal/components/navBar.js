'use client'
import React, { useState } from "react";
import { motion } from "framer-motion";

const Nav = () => {
  const [active, setActive] = useState("Home");

  const handleClick = (item) => {
    setActive(item);
  };

  return (
    <ul className="flex gap-6 absolute z-50 right-10 top-16">
      {["Home", "IT's ME", "My Work"].map((item, index) => (
        <li
          key={index}
          className="primaryF4 relative cursor-pointer"
          onClick={() => handleClick(item)}
        >
          {item}
          {active === item && (
            <motion.div
              layoutId="underline"
              className="underline"
              style={{
                position: "absolute",
                bottom: -2,
                left: 0,
                right: 0,
                height: 2,
                backgroundColor: "black",
              }}
            />
          )}
        </li>
      ))}
    </ul>
  );
};

export default Nav;
