import Link from 'next/link';
import React from 'react';
import Logo from './Logo';
import { useRouter } from 'next/router';
import { LinkedinIcon, MailIcon, GithubIcon } from './Icons';
import { motion } from 'framer-motion';


const MyLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}

      <span className={`
        h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5
        group-hover:w-full transition-[width] ease duration-300
        ${router.asPath === href ? 'w-full' : 'w-0'}`}>
        &nbsp;
      </span>
    </Link>
  )
}
const NavBar = () => {
  return (
    <header className='w-full px-32 py-8 font-medium flex items-center justify-between'>
      <nav>
        <MyLink href="/" title="Home" className='mr-4' />
        <MyLink href="/about" title="About" className='mx-4' />
        <MyLink href="/projects" title="Projects" className='mx-4' />
        <MyLink href="/contact" title="Contact" className='ml-4' />
      </nav>
      <nav className='flex items-center justify-center flex-wrap'>
        <motion.a href="http://linkedin.com/in/fehmi-krifa" target={"_blank"}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 1.5 }}
          className='w-6 mr-3'
        >
          <GithubIcon />
        </motion.a>

        <motion.a href="http://linkedin.com/in/fehmi-krifa" target={"_blank"}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 1.5 }}
          className='w-6 mx-3'
        >
          <LinkedinIcon />
        </motion.a>

        <motion.a href="mailto:maitremfk0910@gmail.com" target={"_blank"}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 1.5 }}
          className='w-6 ml-3'
        >
          <MailIcon />
        </motion.a>
      </nav>
      <div className='absolute left-[47%] top-2 translate-x-[50%]'>
        <Logo />
      </div>
    </header>
  )
}

export default NavBar

