import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Transactions from '../components/Transactions'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Crypto Bull Run Calculator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Crypto Bull Run Calculator
        </h1>

        <p className={styles.description}>
          Be a smart investor and plan when you sell your cryptocurrencies. Get started by entering a transaction.
        </p>

        <h3>Transaction</h3>
        <Transactions />
      </main>
    </div>
  )
}
