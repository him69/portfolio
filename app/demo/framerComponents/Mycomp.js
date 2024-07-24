'use client'
import { useState } from "react";
import { motion } from "framer-motion";

const LayoutAnimationExample = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div onClick={() => setIsOpen(!isOpen)} style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <motion.div
        layout
        style={{
          width: isOpen ? 300 : 100,
          height: isOpen ? 300 : 100,
          backgroundColor: isOpen ? "blue" : "red",
          borderRadius: isOpen ? 20 : 50,
        }}
      />
    </div>
  );
};

export default LayoutAnimationExample;
