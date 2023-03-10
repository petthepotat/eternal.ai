import Head from 'next/head';
import { useState, useEffect, useRef} from 'react';

import styles from '../styles/Home.module.css'
import mainstyle from '../styles/twixtor.module.css';

// import * as login from './login';
import lstyle from '../styles/login.module.css';


const EternalAI: React.FunctionComponent = () => {
  const [isActive, setIsActive] = useState(false);
  
  const generateTwixtor = () => {
    console.log("running twxitor");
    setIsActive(!isActive);
  };
  
  // sample 1 gifs
  const sample1iref = useRef<HTMLImageElement>(null);
  const sample1rref = useRef<HTMLImageElement>(null);
  
  useEffect(() => {
    
    const imageSync = setInterval(() => {
      // const imageSync = setTimeout(() => {
        if(sample1iref.current && sample1rref.current) {
          sample1iref.current.src = "/sample1.gif";
          sample1rref.current.src = "/sample1-result.gif";
        }
      }, 2500);
    }, []);
  

  // for login overlay
  const [loginOverlay, setLoginOverlay] = useState(false);
  const loginOverlayRef = useRef(null);

  const handleGoogleLogin = (e) => {
    e.preventDefault();
    console.log("google login");
  };


  //  end of login overlay

  return (
    <div>
      <Head>
        <title>eternal.ai - home</title>
      </Head>

      {/*  navbar   */}
      <nav className={mainstyle.NavbarStyles}>
        <div className={mainstyle.TwixtorIcon}>
          <a href="/">
            <img src="/favicon.ico" height={50} alt="Twixtor.AI logo" />
          </a>
        </div>
        <div className={`${mainstyle.NavbarEndStyles} ${mainstyle.TwixtorText}`}>
          <a className={mainstyle.NavbarItemStyles} href="./eternal">home</a>
          <a className={mainstyle.NavbarItemStyles} href="#"
              onClick={
                (e) => {
                  e.preventDefault();
                  setLoginOverlay(true);
                }
              }>
              sign in
          </a>
          <a className={mainstyle.NavbarItemStyles} href="#">login</a>
          <a className={mainstyle.NavbarItemStyles} href="#">
            <button className={`${mainstyle.NavbarEndStylesButton} ${mainstyle.TwixtorText}`} onClick={() => {generateTwixtor();}}>
              generate eternal
            </button>
          </a>
        </div>
      </nav>

      {/*  MAIN SECTION  */}
      <main className={mainstyle.Main}>
        {/*  login overlay section   */}
        {
          // showOverlay && <EternalLogin/>
          loginOverlay && (
            <div className={lstyle.LoginOverlay}
              onClick={
                (e) => {
                  if (loginOverlayRef.current && !loginOverlayRef.current.contains(e.target)) {
                    console.log("clicked overlay");
                    setLoginOverlay(false);
                  }
                }
              }>
              <div ref={loginOverlayRef} className={lstyle.LoginContainer}>
                  <form className="login-form">
                      <h1>Login</h1>
                      <button onClick={handleGoogleLogin}>
                        Sign in with Google
                      </button>
                  </form>
              </div>
            </div>
          )
        }

        {/* main section -- the big boi awesome image */}
        <div className={mainstyle.TwixtorBackground}>
            {/* image */}
            <img src="background.gif" className={mainstyle.TwixtorBackgroundImage}/>
            {/* title for page */}
            <div className={mainstyle.ContentGutterSpacing}>
              <h1 className={`${mainstyle.TwixtorText} ${mainstyle.TwixtorTitle} ${mainstyle.TwixtorMainTitle}`}>
                ETERNAL.AI
              </h1>
              <h2 className={`${mainstyle.TwixtorText} ${mainstyle.TwixtorTitle} ${mainstyle.TwixtorMainDescriptionText}`}
                  style={{paddingLeft: `10%`}}>
                Welcome to the Eternal.AI website. Here you can generate interpolated videos for your favorite clips!
              </h2>
            </div>
        </div>

        {/* the 4 icon section */}
        <div className={mainstyle.ContentBase}>
            <div className={`${mainstyle.TwixtorText} ${mainstyle.TwixtorContentGrid}`}>
                <section className={`${mainstyle.SubsectionStyles} ${styles.card}`}>
                    <h2>eternal.ai</h2>
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
            <div className={mainstyle.ContentComparisonContainer}>
              <div className={mainstyle.ComparisonContent}>
                <img ref={sample1iref} id="sample1-img-1" alt='Sample 1: Fox jumping into snow - initial' src="sample1.gif"
                    className={mainstyle.ComparisonContentImage}></img>
              </div>
              <div className={mainstyle.ComparisonContent}>
                <img ref={sample1rref} id="sample1-img-2" alt='Sample 2: Fox jumping into snow - interpolated' src="sample1-result.gif"
                    className={mainstyle.ComparisonContentImage}></img>
              </div>
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



