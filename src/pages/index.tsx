import Head from 'next/head'

import styles from '@/styles/Home.module.css'
import Hero from '../../components/HomeComponents/Hero'
import Feature from '../../components/HomeComponents/Feature'

import AboutUs from '../../components/HomeComponents/AboutUs'
import Portfolio from '../../components/HomeComponents/Portfolio'
import Testimonials from '../../components/HomeComponents/Testimonials'



export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
      <Hero/>
      <Feature/>
      <AboutUs/>
      <Portfolio/>
      <Testimonials/>
      </main>
    </>
  )
}
