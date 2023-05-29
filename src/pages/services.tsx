import React from 'react'
import Hero from '../../components/ServicesComponent/Hero'
import Specialities from '../../components/ServicesComponent/Specialities'
import Services from '../../components/ServicesComponent/Services'
import Head from 'next/head'

const services = () => {
  return (
   <>
   <Head>
   <title>Our Services - Care Services</title>
<meta name="description" content="Explore our services at Care Services - Our mission is to empower individuals and businesses." />
<meta property="og:title" content="Our Services - Care Services" />
<meta property="og:description" content="Explore our services at Care Services - Our mission is to empower individuals and businesses!" />
<meta property="og:url" content="https://careservicesandconsultantltd.com/services" />
<meta property="og:type" content="website" />
       <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/LOGO.jpg" />
      </Head>
   <Hero/>
   <Specialities/>
   <Services/>
   </>
  )
}

export default services