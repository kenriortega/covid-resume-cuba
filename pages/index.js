// import Share from '../components/Share'
import { updateAt, resume, world_countries, affected_provinces } from '../data/latest.json'
import Footer from '../components/Footer'
import Head from 'next/head'
import Image from 'next/image'
import NumericResumeValue from '../components/NumericResumeValue'
import SchemeColorSwitcher from '../components/SchemeColorSwitcher'
import styles from '../styles/Home.module.css'
import TheTableProv from '../components/TheTableProv'
import TheTableWorld from '../components/TheTableWorld'

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Resumen del covid en CUBA </title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <SchemeColorSwitcher />
        <main className={styles.main}>
          <h1 className={styles.title}>
            Resumen COVID-19 en CUBA
          </h1>

          <p className={styles.description}>
            Última actualización <span className={styles.description}>{updateAt} </span>
            fuente: <span className={styles.description}><a href="https://covid19cubadata.github.io/#cuba">covid19cubadata!</a></span>
          </p>

          <div className={styles.grid}>

            {resume.map(({ name, value }) => (
              <span className={styles.card} key={name}>
                <header>
                  <Image
                    className={styles.cardImage}
                    src='/diagnostic.png'
                    alt='Vacunas distribuidas en España'
                    width={300}
                    height={200}
                    priority
                  />
                </header>
                <h3>{name}</h3>
                <p>
                  <NumericResumeValue>
                    {value}
                  </NumericResumeValue>
                </p>
              </span>
            ))}
          </div>

          <p className={styles.description}>Resumen provincial</p>
          {/* make a table */}
          <TheTableProv records={affected_provinces} />
          <p className={styles.description}>Resumen mundial</p>
          {/* make a table */}
          <TheTableWorld records={world_countries} />
        </main>
      </div>
      {/* <Share /> */}
      <Footer />
    </>

  )
}
