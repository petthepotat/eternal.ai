import Head from 'next/head';
import { useState, useEffect } from 'react';

import styles from '../styles/Home.module.css'
import mainstyle from '../styles/twixtor.module.css';



const TwixtorAI: React.FunctionComponent = () => {
  const [isActive, setIsActive] = useState(false);

  const generateTwixtor = () => {
    console.log("running twxitor");
    setIsActive(!isActive);
  };

  return (
    <div>
      <Head>
        <title>Twixtor.AI</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu+Mono&display=swap" rel="stylesheet"></link>
      </Head>
      <nav className={mainstyle.NavbarStyles}>
        <div className={mainstyle.TwixtorIcon}>
          <img src="/favicon.ico" height={50} alt="Twixtor.AI logo" />
        </div>
        <div className={mainstyle.NavbarEndStyles, mainstyle.TwixtorText}>
          <a className={mainstyle.NavbarItemStyles} href="#">Home</a>
          <a className={mainstyle.NavbarItemStyles} href="#">Sign in</a>
          <a className={mainstyle.NavbarItemStyles} href="#">Login</a>
          <button className={mainstyle.NavbarItemStyles} onClick={() => {generateTwixtor();}}>
            Generate Twixtor
          </button>
        </div>
      </nav>
      <main>
        <div className={mainstyle.TwixtorBackground}>
            {/* image */}
            <img src="background.gif" className={mainstyle.TwixtorBackgroundImage}/>
            {/* title for page */}
            <div className={mainstyle.ContentGutterSpacing}>
              <h1 className={`${mainstyle.TwixtorText} ${mainstyle.TwixtorTitle} ${mainstyle.TwixtorMainTitle}`}>Title</h1>
              <h2 className={`${mainstyle.TwixtorText} ${mainstyle.TwixtorTitle} ${mainstyle.TwixtorMainDescriptionText}`}>
                Welcome to the Twixtor.AI website. Here you can generate Twixtor images and videos.
              </h2>
            </div>
        </div>
        <div className={mainstyle.ContentBase}>
            <div className={`${mainstyle.TwixtorText} ${styles.grid}`}>
                <section className={`${mainstyle.SubsectionStyles} ${styles.card}`}>
                    <h2>Twixtor.AI</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, magna id bibendum euismod, magna augue accumsan velit, vel auctor nibh velit vel velit. Sed id mauris at est egestas varius.</p>
                </section>
                <section className={`${mainstyle.SubsectionStyles} ${styles.card}`}>
                    <h2>Who are we</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, magna id bibendum euismod, magna augue accumsan velit, vel auctor nibh velit vel velit. Sed id mauris at est egestas varius.</p>
                </section>
                <section className={`${mainstyle.SubsectionStyles} ${styles.card}`}>
                    <h2>How to use</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, magna id bibendum euismod, magna augue accumsan velit, vel auctor nibh velit vel velit. Sed id mauris at est egestas varius.</p>
                </section>
                <section className={`${mainstyle.SubsectionStyles} ${styles.card}`}>
                    <h2>Subscriptions</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, magna id bibendum euismod, magna augue accumsan velit, vel auctor nibh velit vel velit. Sed id mauris at est egestas varius.</p>
                </section>
            </div>
        </div>
    </main>
    <div>
        <button classname={mainstyle.SignUpButton}>
        Sign up
        </button>
      </div>
    </div>
  );
};

export default TwixtorAI;


