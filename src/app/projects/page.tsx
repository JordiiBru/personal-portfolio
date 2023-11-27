import React from 'react';
import Link from 'next/link';
import styles from '../../styles/Projects.module.css';

export default function Projects() {
  return (
    <main >
      <Link href='/'>
        <img src={'http://jordibru.cloud/images/homebutton.png'} alt="Home" width={50} height={50} className={styles.homeIcon} />
      </Link>
      <div className={styles.container}>
        <h1 className={styles.title}>Projects</h1>
        <div className={styles.separator}></div>
        <p className={styles.title_project}>
          {'>'} Kubernetes Community Cluster
        </p>
        <p className={styles.description}>
          The main objective of this project was to get us started with <a className={styles.link}>Kubernetes</a>.
          Our focus was on creating a hardware resource sharing system, encouraging users to contribute on service hosting. 
          The implementation includes a <a className={styles.link}>ReactJS</a> UI, a <a className={styles.link}>Redis</a> database and an <a className={styles.link}>ExpressJS</a> backend, forming a catalog of APIs for efficient performance. 
        </p>
        <p className={styles.title_project}>
          {'>'} Image storage and management application
        </p>
        <p className={styles.description}>
          This project focuses on developing a <a className={styles.link}>distributed Java application</a> that provides image storage and management capabilities.
          It allows users to register, upload and manage their images. The frontend interacts with a <a className={styles.link}>REST API-based backend</a>, 
          which in turn queries and updates a <a className={styles.link}>JavaDB</a> to provide full functionality.
        </p>  
        <p className={styles.title_project}>
          {'>'} Mastermind Boardgame
        </p>
        <p className={styles.description}>
          The purpose of this project was to create a retro <a className={styles.link}>Java</a> version of the board game Mastermind, 
          using a <a className={styles.link}>three-layer architecture</a>. This implementation allows players to face a bot, which can use either a traditional algorithm or a genetic algorithm.
          In addition, the application offers the ability to save games, register rankings and keep track of records according to the game mode.
        </p>
        <p className={styles.more_description}>
          You can find more of my previous work <a href='https://github.com/JordiiBru?tab=repositories' className={styles.link}>here</a>.
        </p>
      
      </div>
    </main>
  );
}
