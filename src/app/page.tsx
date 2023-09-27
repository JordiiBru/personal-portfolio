import React from 'react';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <main className={styles.container}>
      
      <h1 className={styles.title}>Jordi Bru</h1>
      <hr className={styles.separator} />
      <p className={styles.description} >Site Reliability Engineer Intern @ Mango</p>

      <div className={styles.iconContainer} >
        <a href="https://github.com/JordiiBru" target="_blank" rel="noopener noreferrer"> 
          <img src={'https://personal-portfolio-jordibru.s3.eu-west-1.amazonaws.com/images/github_icon.png'} alt="Icon 2" width={50} height={50} className={styles.icon} />
        </a>
        <a href="https://twitter.com/jordi_bru" target="_blank" rel="noopener noreferrer">
          <img src={'https://personal-portfolio-jordibru.s3.eu-west-1.amazonaws.com/images/twitter_icon.png'} alt="Icon 1" width={50} height={50} className={styles.icon} />
        </a>
        <a href="https://www.linkedin.com/in/jordi-bru-carci-65b9b7276/" target="_blank" rel="noopener noreferrer">
          <img src={'https://personal-portfolio-jordibru.s3.eu-west-1.amazonaws.com/images/linkedin.png'} alt="Icon 3" width={50} height={50} className={styles.icon} />
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
