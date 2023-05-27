import React from 'react'
import Hero from '../../components/ServicesComponent/Hero'
import Specialities from '../../components/ServicesComponent/Specialities'
import Services from '../../components/ServicesComponent/Services'
import Head from 'next/head'

const services = () => {
  return (
   <>
   <Head>
        <title>Service</title>
        <meta name="description" content="mission is to empower individuals and businesses" />
        <meta property="og:title" content="Care Services" />
  <meta property="og:description" content="mission is to empower individuals and businesses!" />
  <meta property="og:url" content="https://careservicesandconsultantltd.com/" />
  <meta property="og:type" content="website" />        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/LOGO.jpg" />
      </Head>
   <Hero/>
   <Specialities/>
   <Services/>
   </>
  )
}

export default services