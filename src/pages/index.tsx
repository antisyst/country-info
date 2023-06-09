import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import CountryInfoApp from './country'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>reginfo | Ramazan Azimli</title>
        <meta name="description" content="Generated by create next app" />
        <link href="https://api.fontshare.com/v2/css?f[]=satoshi@900,700,500&f[]=author@500,600,700&f[]=general-sans@500,600,700&f[]=outfit@800,500,700&f[]=beVietnam-pro@600,900,700,800&f[]=excon@900,700,500&f[]=chillax@600,700&f[]=nippo@700&f[]=work-sans@800,600,700,601&display=swap" rel="stylesheet"></link>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </Head>
     <div>
      <CountryInfoApp/>
     </div>
    </>
  )
}
