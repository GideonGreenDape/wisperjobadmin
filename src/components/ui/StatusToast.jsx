import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Icons from "../../assets/icons"; 

const StatusToast = ({ message, type = "success", onClose }) => {
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    const duration = 3000; 
    const interval = 30; 
    const decrement = (100 / (duration / interval));

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev <= 0) {
          clearInterval(timer);
          onClose?.();
          return 0;
        }
        return prev - decrement;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onClose]);

  const bgColor = type === "error" ? "!bg-red-500" : "!bg-[#168DE1]";

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.3 }}
        className={`fixed bottom-[20px] right-[20px] flex items-center gap-[6px] ${bgColor} text-white !text-[12px] px-[10px] py-[6px] rounded-[5px] shadow-lg w-[230px] h-[40px] z-[9999]`}
      >
        <Icons.CircleCheck size={14} className="min-w-[14px]" />
        <span className="truncate">{message}</span>

        {/* Progress bar */}
        <motion.div
          className="absolute bottom-0 left-0 h-[3px] bg-white"
          initial={{ width: "100%" }}
          animate={{ width: `${progress}%` }}
          transition={{ ease: "linear" }}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default StatusToast;
