import React from 'react';
import Link from 'next/link';
import styles from '../../styles/About.module.css';

export default function About() {
  return (
    <main >
      <Link href='/'>
        <img src={'http://jordibru.cloud/images/homebutton.png'} alt="Home" width={50} height={50} className={styles.homeIcon} />
      </Link>
      <div className={styles.container}>
        <h1 className={styles.title}>About Me</h1>
        <p className={styles.description}>
          Hi! My name is Jordi, a Computer Engineering student at UPC-FIB and current <span className={styles.link}>Site Reliability Engineer</span> intern.
          <br></br><br></br>
          With a keen interest in <span className={styles.link}>DevOps</span> practices, my current focus is on learning how to manage services and their infrastructure, specializing in cloud (AWS), Terraform, and Kubernetes.
          <br></br><br></br>
          I relentlessly pursue what I am most passionate about in this sector, while dedicating myself to learning and creating efficient solutions. This is just the beggining :)
          <br></br><br></br>
          You can reach out to me on <a href="https://www.linkedin.com/in/jordi-bru-carci-65b9b7276/" className={styles.link}>LinkedIn</a>.
        </p>
      <div className={styles.separator}></div>
      </div>
    </main>
  );
}