"use client";
import React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import styles from '../../styles/Projects.module.css';

export default function Projects() {
  const [displayText, setDisplayText] = useState("Pick a project...");
  
  const PTI = () => setDisplayText("Kubernetes Community Cluster - The main objective of this project was to get us started with Kubernetes. We set up a K3S cluster on a PC and additional external nodes serving as worker nodes. Our aim was to develop a hardware resource sharing system that facilitates service hosting, with users contributing these resources.");
  const AD = () => setDisplayText("Image storage and management application - This project focuses on developing a distributed Java application that provides image storage and management capabilities. It allows users to register, upload and manage their images. The frontend interacts with a REST API-based backend, which in turn queries and updates a JavaDB to provide full functionality.");
  const PROP = () => setDisplayText("Mastermind Boardgame - The purpose of this project was to create a retro Java version of the board game Mastermind, using a three-layer architecture. This implementation allows players to face a bot, which can use either a traditional algorithm or a genetic algorithm. In addition, the application offers the ability to save games, register rankings and keep track of records according to the game mode.");
 
  return (
    <main >
      <Link href='/'>
        <img src={'http://jordibru.cloud/images/homebutton.png'} alt="Home" width={50} height={50} className={styles.homeIcon} />
      </Link>
      <div className={styles.container}>
        <h1 className={styles.title}>Projects</h1>
        <p className={styles.description} onClick={PTI}>
          {'>'} Kubernetes Community Cluster
        </p>
        <p className={styles.description} onClick={AD}>
          {'>'} Image storage and management application
        </p>
        <p className={styles.description} onClick={PROP}>
          {'>'} Mastermind Boardgame
        </p>
        <div className={styles.divider}>
          <p className={styles.clickText}>{displayText}</p>
        </div>
        <p className={styles.more_description}>
          You can find more of my previous work <a href='https://github.com/JordiiBru?tab=repositories' className={styles.link}>here</a>.
        </p>
      <div className={styles.separator}></div>
      </div>
    </main>
  );
}
