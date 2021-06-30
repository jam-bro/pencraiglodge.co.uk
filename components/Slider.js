import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import { images } from "../../data/pencraig/image-data";
import image from "next/image";

export default function Slider() {
  const [[page, direction], setPage] = useState(0, 0);

  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };
  return <div>
    <>
    <AnimatePresence initial={false} custom={direction}>
        <img
          src={ images[image] }
          key={ page }
          custom={direction}
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          exit={{opacity:0}}
          transition={ { x: { type: 'spring', stiffness: 300, damping: 300 }, opacity: { duration: 100 } } }
          drage="x"
          dragConstraints={ { left: 0, right: 0 } }
          dragElastic={1}
        />

      </AnimatePresence>
      </>
  </div>;
}
