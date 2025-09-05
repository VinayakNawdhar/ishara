"use client";
import { motion } from "framer-motion";

export default function Home() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/bg-01.jpeg"
          alt="Ishara background"
          className="w-full h-full object-cover object-center blur-lg brightness-75"
          draggable={false}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-black/40" />
      </div>

      <main className="container mx-auto px-4 py-16 flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h1 className="font-display text-6xl sm:text-7xl md:text-8xl font-bold mb-3 text-white tracking-tight">
            Ishara
          </h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "80px" }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="h-[2px] bg-[#d6ad60] mx-auto mb-4"
          />
          <p className="text-xl sm:text-2xl text-[#f5efe6] font-light tracking-wider">
            Sustainable. Ethical. Timeless.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16"
          variants={{
            show: {
              transition: { staggerChildren: 0.2 },
            },
          }}
          initial="hidden"
          animate="show"
        >
          {/* Feature boxes */}
          <motion.div
            variants={fadeIn}
            className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-white border border-white/20 hover:border-[#d6ad60]/50 transition-all duration-300"
          >
            <h3 className="font-display text-xl mb-3">Organic Cotton</h3>
            <p className="text-sm text-gray-200">
              Ethically sourced and naturally processed fabrics that respect both
              nature and tradition.
            </p>
          </motion.div>

          <motion.div
            variants={fadeIn}
            className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-white border border-white/20 hover:border-[#d6ad60]/50 transition-all duration-300"
          >
            <h3 className="font-display text-xl mb-3">Cultural Heritage</h3>
            <p className="text-sm text-gray-200">
              Handcrafted ethnic wear featuring intricate Indian embroidery and
              timeless designs.
            </p>
          </motion.div>

          <motion.div
            variants={fadeIn}
            className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-white border border-white/20 hover:border-[#d6ad60]/50 transition-all duration-300"
          >
            <h3 className="font-display text-xl mb-3">Conscious Luxury</h3>
            <p className="text-sm text-gray-200">
              Chemical-free, skin-friendly garments crafted by expert artisans and
              technicians.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-center"
        >
          <span className="inline-block px-10 py-5 rounded-full bg-gradient-to-r from-white/90 to-white/80 shadow-lg backdrop-blur-md text-2xl font-semibold text-[#3b2f2f] border border-white/20">
            <span className="font-display">Coming Soon</span>
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.9 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-12 text-white/70 text-center max-w-sm text-xs"
        >
          © {new Date().getFullYear()} Ishara. All Rights Reserved.
        </motion.p>
      </main>

      {/* Decorative elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 1.5, duration: 2 }}
        className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-[#d6ad60]/30 to-transparent rounded-full blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 1.8, duration: 2 }}
        className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-[#d6ad60]/30 to-transparent rounded-full blur-3xl"
      />
    </div>
  );
}
