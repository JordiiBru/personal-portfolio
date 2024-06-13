import React from 'react';
import Link from 'next/link';
import styles from '../../styles/About.module.css';

export default function About() {
  return (
    <main>
      <Link href='/'>
        <img src={'https://s3.eu-west-1.amazonaws.com/my-images.jordibru.cloud/homebutton.png'} alt="Home" width={50} height={50} className={styles.homeIcon} />
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
          You can reach out to me on <a href="https://www.linkedin.com/in/jordi-bru-carci/" className={styles.link}>LinkedIn</a>.
        </p>
      <div className={styles.separator}></div>
      <br></br>
      <div className={styles.iconcontainer}>
          <div className={styles.iconRow}>
            <img src='https://s3.eu-west-1.amazonaws.com/my-images.jordibru.cloud/kubernetes_icon.png' alt="Icon 1" className={styles.icon} />
            <img src='https://s3.eu-west-1.amazonaws.com/my-images.jordibru.cloud/tf_icon.png' alt="Icon 2" className={styles.icon} />
            <img src='https://s3.eu-west-1.amazonaws.com/my-images.jordibru.cloud/aws_icon.png' alt="Icon 3" className={styles.icon} />
          </div>
          <div className={styles.iconRow}>
            <img src='https://s3.eu-west-1.amazonaws.com/my-images.jordibru.cloud/c_icon.png' alt="Icon 4" className={styles.icon} />
            <img src='https://s3.eu-west-1.amazonaws.com/my-images.jordibru.cloud/java_icon.png' alt="Icon 5" className={styles.icon} />
            <img src='https://s3.eu-west-1.amazonaws.com/my-images.jordibru.cloud/pyhton_icon.png' alt="Icon 6" className={styles.icon} />
            <img src='https://s3.eu-west-1.amazonaws.com/my-images.jordibru.cloud/linux_icon.png' alt="Icon 7" className={styles.icon} />
          </div>
        </div>
      </div>
      
    </main>
  );
}