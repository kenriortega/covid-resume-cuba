import Head from 'next/head'
import styles from '../styles/Home.module.css'
import NumericResumeValue from '../components/NumericResumeValue'
import TheTable from '../components/TheTable'
import { updateAt, resume, world_countries } from '../data/latest.json'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Resume Covid19 Cuba </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Resume Covid19 from <a href="https://covid19cubadata.github.io/#cuba">covid19cubadata!</a>
        </h1>

        <p className={styles.description}>
          Resume
          <code className={styles.code}>{updateAt}</code>
        </p>

        <div className={styles.grid}>
          {resume.map(({ name, value }) => (
            <span className={styles.card} key={name}>
              <h3>{name}</h3>
              <p>
                <NumericResumeValue>
                  {value}
                </NumericResumeValue>
              </p>
            </span>
          ))}
        </div>

        <p className={styles.description}>
          World Resume
          <code className={styles.code}>{updateAt}</code>
        </p>
        {/* make a table */}
        <TheTable records={world_countries} />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
