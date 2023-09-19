"use client";
import React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/Projects.module.css';
import homebutton from '../../public/icons/homebutton.png';

export default function Projects() {
  const [displayText, setDisplayText] = useState("Click a project...");
  
  const PTI = () => setDisplayText("Kubernetes Community Cluster - The main goal of this university project was to introduce us to Kubernetes. We set up a K3S cluster on a university pc with it acting as the main node, and external nodes serving as worker nodes. All this in order to create a hardware resource sharing system that allows hosting services, being the users themselves the ones who provide these resources.");
  const AD = () => setDisplayText("Image storage and management application - This university project focuses on developing a distributed Java application that provides image storage and management capabilities. It allows users to register, upload and manage their images. The frontend interacts with a REST API-based backend, which in turn queries and updates a JavaDB to provide full functionality.");
  const PROP = () => setDisplayText("Mastermind Boardgame - The purpose of this university project was to create a retro Java version of the board game Mastermind, using a three-layer architecture. This implementation allows players to face a bot, which can use either a traditional algorithm or a genetic algorithm. In addition, the application offers the ability to save games, register rankings and keep track of records according to the game mode.");
 
  return (
    <main >
      <Link href='/'>
        <img src={'https://myportfolio-jordi.s3.eu-west-1.amazonaws.com/images/homebutton.png'} alt="Home" width={50} height={50} className={styles.homeIcon} />
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
        <p className={styles.description}>
          You can find more projects and work from university laboratories <a href='https://github.com/JordiiBru?tab=repositories' className={styles.link}>here</a>.
        </p>
      <div className={styles.separator}></div>
      </div>
    </main>
  );
}
