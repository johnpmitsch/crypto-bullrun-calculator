import Head from 'next/head'
import Transactions from '../components/Transactions'

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen">
        <Head>
          <title>Crypto Bull Run Calculator</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <h1 className="text-5xl text-center font-extrabold">
            Crypto Bull Run Calculator
          </h1>

          <p className="text-3xl text-center">
            Be a smart investor and plan when you sell your cryptocurrencies. Get started by entering a transaction.
          </p>

          <div className="flex flex-wrap mb-1 text-center">
            <div className="w-1/3 px-2"></div>
            <div className="w-1/3 ml-auto px-2">
              <h3 className="text-lg font-bold">New Transaction</h3>
            </div>
            <div className="w-1/3 px-2"></div>
            <div className="w-1/3 px-2"></div>
            <div className="w-1/3 px-2 bg-gray-200 rounded p-4">
              <Transactions />
            </div>
            <div className="w-1/3 px-2"></div>
          </div>
        </main>
    </div>
  )
}
