'use client'

import { motion } from 'framer-motion'

export function MotionDiv({ children, className, ...props }: any) {
  return (
    <motion.div className={className} {...props}>
      {children}
    </motion.div>
  )
}