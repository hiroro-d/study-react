import Image from 'next/image'
import Head from 'next/head'
import Links from '/components/Links'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
    </div>
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <Links />
    </main>
    </>
  )
}
