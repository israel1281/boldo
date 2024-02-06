'use client'
import React, { FC } from 'react';
import styles from './News.module.css'
import { newsData } from './news-data';
import Image from 'next/image';

const News: FC = () => {

    return (
        <div className={styles.news_container}>
            <div className={styles.title}>
                <h1>Latest news</h1>
            </div>
            <div className={styles.news_content}>
                {
                    newsData.map((news, index) => (
                        <div key={index} className={styles.news}>
                            <Image 
                                src={news.image}
                                alt="Article Image"
                                width={300}
                                height={209}
                            />
                            <div className={styles.news_info}>
                                <p>
                                    <span>Category</span>
                                    <span>November 22, 2022</span>
                                </p>
                                <p>{news.title}</p>
                                <section>
                                    <Image 
                                        src={news.avatar}
                                        alt="author avatar"
                                        width={32}
                                        height={32}
                                    />
                                    <span>{news.name}</span>
                                </section>
                            </div>
                        </div>
                    ))
                }
            </div>
            <button className={styles.load_more}>
                Load more
            </button>
        </div>
    )
}

export default News