import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Toast({ message, type, duration = 4000, onClose }) {
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev <= 0) {
          clearInterval(interval);
          onClose?.();
          return 0;
        }
        return prev - 1;
      });
    }, duration / 100);

    return () => clearInterval(interval);
  }, [duration, onClose]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-[25px] right-[25px] bg-[#168DE1] px-[16px] py-[10px] rounded-[4px] text-white text-[12px] rounded-md shadow-lg w-[250px] flex flex-col gap-1 z-[9999]"
      >
        <span>{message}</span>
        <div className="w-full h-[3px] bg-white/30 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-white"
            style={{ width: `${progress}%` }}
            transition={{ ease: "linear", duration: 0.4 }}
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
