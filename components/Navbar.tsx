'use client';

import React from 'react'
import { motion } from 'framer-motion';
import styles from '../styles';
import { navVariants } from 'utils/motion';


function Navbar() {
  return (
    <motion.nav
    variants={navVariants}
    
    >
      Navbar
    </motion.nav>
  )
}

export default Navbar