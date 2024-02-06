import React , { FC } from 'react';
import styles from './Footer.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { footer_data } from './footer_data';

const Footer: FC = () => {

    return (
        <div className={styles.footer_container}>
            <div className={styles.footer_top}>
                <div className={styles.logo}>
                    <Image 
                        src="/images/Logo.png"
                        alt='Logo'
                        width={200}
                        height={50}
                    />
                </div>
                <nav>
                    <Link href="/">
                        <span>Landings</span>
                    </Link>
                    <Link href="/">
                        <span>Company</span>
                    </Link>
                    <Link href="/">
                        <span>Resources</span>
                    </Link>
                </nav>
            </div>
            <div className={styles.footer_bottom}>
                <div className={styles.bottom_left}>
                    <p>Social media validation business model canvas graphical user interface launch party creative facebook iPad twitter.</p>
                    <span className={styles.reserve}>All rights reserved.</span>
                </div>
                <div className={styles.bottom_nav}>
                    {
                        footer_data.map((data, index) => (
                            <Link href="/" key={index}>
                                {data} { data === 'Careers' && (
                                    <span className={styles.hiring}>
                                        Hiring!
                                    </span>
                                )}
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Footer;