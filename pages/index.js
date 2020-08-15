import Head from 'next/head';
import Transactions from '../components/Transactions';
import DarkModeToggle from '../components/DarkModeToggle';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Crypto Exit Plan</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto my-8 p-4 justify-center leading-normal">
        <DarkModeToggle />
        <h1 className="text-5xl text-center font-extrabold">
          Crypto Exit Plan
        </h1>

        <p className="text-2xl text-center mb-12">
          Be a savy investor and plan when to sell your cryptocurrencies. Get
          started by entering a previous transaction.
        </p>

        <Transactions />
      </main>
    </div>
  );
}
