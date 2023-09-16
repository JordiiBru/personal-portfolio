import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/About.module.css';
import homebutton from '../../public/icons/homebutton.png';

export default function About() {
  return (
    <main >
      <Link href='/'>
        <Image src={homebutton} alt="Home" width={50} height={50} className={styles.homeIcon} />
      </Link>
      <div className={styles.container}>
        <h1 className={styles.title}>About Me</h1>
        <p className={styles.description}>
          Hi! My name's Jordi, a Computer Engineering student at UPC-FIB and current <a href="https://en.wikipedia.org/wiki/Site_reliability_engineering" className={styles.link}>Site Reliability Engineer</a> intern.
          <br></br><br></br>
          With a keen interest in <a href="https://en.wikipedia.org/wiki/DevOps" className={styles.link}>DevOps</a> practices, my current focus is on learning how to manage services and their infrastructure, specializing in cloud (AWS), Terraform, and Kubernetes.
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