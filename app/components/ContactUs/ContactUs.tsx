'use client'
import React, { FC } from 'react';
import styles from './ContactUs.module.css';


const ContactUs: FC = () => {

    return (
        <div className={styles.contactus_container}>
            <div className={styles.contactus_section}>
                <h1>An enterprise template to ramp up your company website</h1>
                <form>
                    <input 
                        type='email'
                        placeholder='Your email address'
                    />
                    <button>
                        Start now
                    </button>
                </form>
            </div>
        </div>
    )
}

export default ContactUs;