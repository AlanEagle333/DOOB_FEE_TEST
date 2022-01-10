import Head from 'next/head'
import styles from '../styles/Home.module.css'
import NavBar from '../components/navBar'
import NavFoot from '../components/navFoot'
import SimpleSlider from '../components/slick'




export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>DOOB</title>
        <meta name="viewport" content="width=device-width" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@600&display=swap" rel="stylesheet" />
      </Head>

      <main className={styles.main}>

        <NavBar/>

        <body className={styles.body}>

          <div className={styles.part}>
            <div className={styles.div}>
              <h1>
                The Spirit of Digital Agency.
              </h1>
              <ul>
                <li className={styles.info}>
                  <p href="about">More About Us.</p>
                </li>
                <li>
                  <a href="getintouch">Get in Touch</a>
                </li>
              </ul>
            </div>
            <div className={styles.Slider}>
              <SimpleSlider />
            </div>
          </div>
          <div className={styles.grid}>
            <p className={styles.card}></p>

            <p className={styles.card}></p>

            <p className={styles.card}></p>

            <p className={styles.card}></p>

            <p className={styles.card}></p>

            <p className={styles.card}></p>


          </div>
          <p id="portfolio" className={styles.more}><a href="portfolio">See more of this.</a></p>
          <div className={styles.getInTouch}>
            <a href="/contact">Contact Us.</a>
            <p>Get in Touch</p>
          </div>
          <div className={styles.formBody}>
            <form id="contact" className={styles.formPad}>
              <span >
                <input className={styles.inlForm}
                  placeholder=" Your email"
                ></input>
              </span>
              <span>
                <input className={styles.inlForm}
                  placeholder=" Subject"
                ></input>
              </span>
              <span>
                <input className={styles.divForm}
                  placeholder=" Message here..."
                ></input>
              </span>
              <button className={styles.sendButton}>Send Message</button>
            </form>
          </div>
        </body>
      </main>

      <footer className={styles.footer}>
        <p>DOOB</p>
        <p className={styles.creative}>Creativity above</p>
        <p className={styles.navFoot}><NavFoot /></p>
        <p>&copy; 2019-Doob,All Right Reserved</p>


      </footer>
    </div >
  )
}
