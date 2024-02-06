'use client'
import React, { FC } from 'react';
import styles from './Blog.module.css'
import Image from 'next/image';

const Blog: FC = () => {

    return (
        <div className={styles.blog_container}>
            <h3>Blog</h3>
            <h1>Thoughts and words</h1>
            <div className={styles.blog_content}>
                <Image 
                    src="/images/Rectangle 1270.png"
                    alt="new image"
                    width={550}
                    height={366}
                />
                <div className={styles.blog_info}>
                    <p>
                        <span>Category</span>
                        <span>November 22, 2022</span>
                    </p>
                    <p>Pitch termsheet backing validation focus release.</p>
                    <section>
                        <Image 
                            src="/images/Ellipse 10.png"
                            alt="author avatar"
                            width={32}
                            height={32}
                        />
                        <span>Chandlier Bing</span>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Blog;