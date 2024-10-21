"use client";
import React from "react";
import { motion } from "framer-motion";

interface Props {
  title: string;
  subTitle: string;
}

const AnimatedTitle: React.FC<Props> = ({ title, subTitle }: Props) => {
  return (
    <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center mb-8">
      <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
        {title} <span className="text-indigo-600">{subTitle}</span>
      </h1>
    </motion.div>
  );
};

export default AnimatedTitle;
