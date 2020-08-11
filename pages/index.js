import Head from 'next/head'
import Transactions from '../components/Transactions'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Crypto Bull Run Calculator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-lg text-center m-4">
          Crypto Bull Run Calculator
        </h1>

        <p>
          Be a smart investor and plan when you sell your cryptocurrencies. Get started by entering a transaction.
        </p>

        <h3>New Transaction</h3>
        <Transactions />
      </main>
    </div>
  )
}
