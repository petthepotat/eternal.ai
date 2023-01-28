import Head from 'next/head';
import { useState, useEffect } from 'react';

import styles from '../styles/Home.module.css'
import mainstyle from '../styles/twixtor.module.css';



const EternalAI: React.FunctionComponent = () => {
  const [isActive, setIsActive] = useState(false);

  const generateTwixtor = () => {
    console.log("running twxitor");
    setIsActive(!isActive);
  };

  
  useEffect(() => {
    const element1 = document.getElementById("sample1-img-1")
    // console.log(element1);
    
    const element2 = document.getElementById("sample1-img-2")
    // console.log(element2);
    
    const imageSync = setInterval(() => {
    // const imageSync = setTimeout(() => {
      element1.style.visibility = "hidden";
      element2.style.visibility = "hidden";
      element1.style.visibility = "visible";
      element2.style.visibility = "visible";
      // console.log(element1.style.visibility

    }, 1000);
  }, []);


  return (
    <div>
      <Head>
        <title>Eternal.AI</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu+Mono&display=swap" rel="stylesheet"></link>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link href="https://fonts.googleapis.com/css2?family=Fira+Mono:wght@700&family=Ubuntu+Mono&display=swap" rel="stylesheet"></link>
      </Head>

      {/*  navbar   */}
      <nav className={mainstyle.NavbarStyles}>
        <div className={mainstyle.TwixtorIcon}>
          <a href="/">
            <img src="/favicon.ico" height={50} alt="Twixtor.AI logo" />
          </a>
        </div>
        <div className={`${mainstyle.NavbarEndStyles} ${mainstyle.TwixtorText}`}>
          <a className={mainstyle.NavbarItemStyles} href="#">Home</a>
          <a className={mainstyle.NavbarItemStyles} href="#">Sign in</a>
          <a className={mainstyle.NavbarItemStyles} href="#">Login</a>
          <a className={mainstyle.NavbarItemStyles} href="#">
            <button className={`${mainstyle.NavbarButton} ${mainstyle.TwixtorText}`} onClick={() => {generateTwixtor();}}>
            Generate Eternal
          </button>
          </a>
        </div>
      </nav>

        {/*  MAIN SECTION  */}
      <main className={mainstyle.Main}>

        {/* main section -- the big boi awesome image */}
        <div className={mainstyle.TwixtorBackground}>
            {/* image */}
            <img src="background.gif" className={mainstyle.TwixtorBackgroundImage}/>
            {/* title for page */}
            <div className={mainstyle.ContentGutterSpacing}>
              <h1 className={`${mainstyle.TwixtorText} ${mainstyle.TwixtorTitle} ${mainstyle.TwixtorMainTitle}`}>
                Eternal.AI
              </h1>
              <h2 className={`${mainstyle.TwixtorText} ${mainstyle.TwixtorTitle} ${mainstyle.TwixtorMainDescriptionText}`}
                  style={{paddingLeft: `10%`}}>
                Welcome to the Eternal.AI website. Here you can generate interpolated videos for your favorite clips!
              </h2>
            </div>
        </div>

        {/* the 4 icon section */}

        <div className={mainstyle.ContentBase}>
            <div className={`${mainstyle.TwixtorText} ${mainstyle.ContentGrid}`}>
                <section className={`${mainstyle.SubsectionStyles} ${styles.card}`}>
                    <h2>Eternal.AI</h2>
                    <p>A small program designed by two high school students! You input your video, we give you higher fps, slow-mo, interpolated...</p>
                    <p><br></br></p>
                    <p>(the list goes on)</p>
                </section>
                <section className={`${mainstyle.SubsectionStyles} ${styles.card}`}>
                    <h2>Who are we</h2>
                    <p>
                      2 high school students passionate about the most random things ever :)
                    </p>
                </section>
                <section className={`${mainstyle.SubsectionStyles} ${styles.card}`}>
                    <h2>How to use</h2>
                    <p>
                      Click generate twixtor, upload your video, and wait for the magic to happen!
                    </p>
                </section>
                <section className={`${mainstyle.SubsectionStyles} ${styles.card}`}>
                    <h2>Subscriptions</h2>
                    <p>
                      yes so this exists too!
                    </p>
                </section>
            </div>
        </div>

        {/* background 2  + sample 1 comparison */}

        <div className={`${mainstyle.PreSignUpMain}`}>
          <section className={`${mainstyle.FadeInTop}`}/>
          <div className={mainstyle.ComparisonBase}>
            <div className={mainstyle.ComparisonDescription}>
              <h1>This is a sample comparison:</h1>
              <br></br>
              <p>The left is the original gif</p>
              <p>The right is the interpolated gif</p>
            </div>
            <div className={mainstyle.ComparisonContent}>
              <img id="sample1-img-1" alt='Sample 1: Fox jumping into snow - initial' src="sample1.gif"
                  className={mainstyle.ComparisonContentImage}></img>
            </div>
            <div className={mainstyle.ComparisonContent}>
              <img id="sample1-img-2" alt='Sample 2: Fox jumping into snow - interpolated' src="sample1-result.gif"
                  className={mainstyle.ComparisonContentImage}></img>
            </div>
            
          </div>
        </div>

        {/* sign up */}
        
        <div className={mainstyle.SignUpBase}>
          
          <h2 className={`${mainstyle.TwixtorText} ${mainstyle.SignUpContent}`}>
            Sign up for an Eternal.AI subscription
          </h2>

            {/*  grid */}
          <div className={`${mainstyle.SignUpContainer}`}>
            {/* row 1 */}
            <div className={`${mainstyle.SignUpCard}`}>
              <h1>Infant</h1>
              <h2>ur bad and ur gae gimme $1 / day :0 it rhymes so its true</h2>
            </div>
            <div className={`${mainstyle.SignUpCard}`}>
              hello world
            </div>
            <div className={`${mainstyle.SignUpCard}`}>
              hello world
            </div>
            <div className={`${mainstyle.SignUpCard}`}>
              hello world
            </div>
          </div>

          {/* row 2 -- outside of grid */}
          <div className={`${mainstyle.SignUpButtonSection}`}>
            <button id="sign-up-button" className={`${mainstyle.SignUpButton}`}
                onClick={() => {
              console.log("someone wants to sign up!!!");
            }}>
              Sign up
            </button>
          </div>
        </div>


      </main>
    </div>
  );
};




// EternalAI.getInitialProps = async (ctx) => {
//   // Fetch data here and return it as an object

//   return { ctx }
// }


export default EternalAI;



