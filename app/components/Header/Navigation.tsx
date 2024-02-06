import React, { FC } from 'react';
import { usePathname } from 'next/navigation';
import styles from './Header.module.css';
import Link from 'next/link';

const Navigation: FC = () => {
  const pathname = usePathname()

  const isActive = (href: string) => {
    return pathname === href ? styles.active : '';
  };

  return (
    <nav className={styles.navigation}>
      <Link href="/">
        <span className={`${styles.navLink} ${isActive('/product')}`}>Product</span>
      </Link>
      <Link href="/">
        <span className={`${styles.navLink} ${isActive('/about')}`}>Services</span>
      </Link>
      <Link href="/">
        <span className={`${styles.navLink} ${isActive('/contact')}`}>About</span>
      </Link>
      <Link href="/">
        <span className={`${styles.navLink} ${isActive('/')}`}>Log In</span>
      </Link>
    </nav>
  );
};

export default Navigation;