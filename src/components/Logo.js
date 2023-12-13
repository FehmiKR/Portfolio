import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className='flex items-center justify-center mt-2'>
      <MotionLink href="/"
        className='w-16 h-16 bg-dark text-light flex items-center justify-center rounded-full font-bold'
        whileHover={{
          scale: 1.5,
          backgroundColor: ["#121212", "rgba(65,119,145,1)", "rgba(70,174,117,1)", "rgba(252,176,69,1)", "rgba(166,104,207,1)", "#121212"],
          transition: { duration: 1.25, repeat: Infinity }
        }}
      > MFK</MotionLink>
    </div>
  )
}

export default Logo