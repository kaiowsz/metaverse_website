'use client';

import React from 'react'
import styles from '../styles';

function StartSteps({number, text}: any) {
  return (
    <div className={`${styles.flexCenter} flex-row`}>
      <div className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323F5D]`}>
        <p className="font-bold text-[20px] text-white">0{number}</p>
      </div>
      <p className="flex-1 ml-[30px] font-normal text-[17px] text-[#B0B0B0]">{text}</p>
    </div>
  )
}

export default StartSteps