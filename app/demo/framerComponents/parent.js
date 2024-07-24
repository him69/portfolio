'use client'
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const items = [{ id: 1, content: "Item 1" }, { id: 2, content: "Item 2" }];

const SharedLayoutAnimation = () => {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <div>
      {items.map(item => (
        <motion.div
          key={item.id}
          layoutId={`item-${item.id}`}
          onClick={() => setSelectedId(item.id)}
          style={{ margin: 20, padding: 20, backgroundColor: "lightgray", cursor: "pointer" }}
        >
          {item.content}
        </motion.div>
      ))}

      <AnimatePresence>
        {selectedId && (
          <motion.div
            layoutId={`item-${selectedId}`}
            style={{ position: "absolute", top: 0, left: 0, width: "100vw", height: "100vh", backgroundColor: "lightblue" }}
          >
            <button onClick={() => setSelectedId(null)}>Close {selectedId}</button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SharedLayoutAnimation;
