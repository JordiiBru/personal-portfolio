import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import twitter from '../public/twitter_icon.png';
import github from '../public/github_icon.png';
import linkedin from '../public/linkedin_icon.png';
import insta from '../public/instagram.png';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <main className={styles.container}>

      <h1 className={styles.title}>Jordi Bru</h1>
      <hr className={styles.separator} />
      <p className={styles.description} >Site Reliability Engineer Intern @ Mango</p>

      <div className={styles.iconContainer}>
        <a href="https://twitter.com/jordi_bru" target="_blank" rel="noopener noreferrer">
          <Image src={twitter} alt="Icon 1" width={50} height={50} className={styles.icon} />
        </a>
        <a href="https://github.com/JordiiBru" target="_blank" rel="noopener noreferrer"> 
          <Image src={github} alt="Icon 2" width={50} height={50} className={styles.icon} />
        </a>
        <a href="https://www.linkedin.com/in/jordi-bru-carci-65b9b7276/" target="_blank" rel="noopener noreferrer">
          <Image src={linkedin} alt="Icon 3" width={50} height={50} className={styles.icon} />
        </a>
        <a href="https://www.instagram.com/jorditu8/" target="_blank" rel="noopener noreferrer">
          <Image src={insta} alt="Icon 4" width={50} height={50} className={styles.icon} />
        </a>
      </div>

      <div>
        <Link href="/about" className={styles.link}>
          About me
        </Link>
        <br></br>
        <Link href="/projects" className={styles.link}>
          Projects
        </Link>
      </div>

    </main>
  );
}
