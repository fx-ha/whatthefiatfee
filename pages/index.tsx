import Head from 'next/head'
import styles from '../styles/Home.module.sass'

export default function Home(): JSX.Element {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <p>Hello World</p>
      </main>
    </div>
  )
}
