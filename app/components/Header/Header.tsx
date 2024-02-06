'use client'
import React, { FC, useEffect, useState } from 'react';
import styles from './Header.module.css';
import Image from 'next/image';
import Navigation from './Navigation';

const Header: FC = () => {
    const [scroll, setScroll] = useState<boolean>(false);
  
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
  
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    return (
      <div className={`${styles.header_container} ${scroll ? styles.scroll : ''}`}>
        <Image 
            src="/images/Logo.png" 
            alt="logo"
            width={160}
            height={42}
        />
        <Navigation />
      </div>
    );
  };
  
  export default Header;