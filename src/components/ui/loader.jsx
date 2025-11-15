import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="flex items-center justify-center w-full h-screen bg-white">
      <motion.div
        className="w-[50px] h-[50px] rounded-full border-4 border-black border-t-transparent"
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 0.7,
          ease: "linear"
        }}
      />
    </div>
  );
}
