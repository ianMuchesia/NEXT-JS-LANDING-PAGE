import React from 'react'
import Hero from '../../components/ContactComponents/Hero'
import ContactForm from '../../components/ContactComponents/ContactForm'
import Details from '../../components/ContactComponents/Details'
import Head from 'next/head'

const contact = () => {
  return (
   <>
   <Head>
        <title>Contact</title>
        <meta name="description" content="mission is to empower individuals and businesses" />
        <meta property="og:title" content="Care Services" />
  <meta property="og:description" content="mission is to empower individuals and businesses!" />
  <meta property="og:url" content="https://careservicesandconsultantltd.com/" />
  <meta property="og:type" content="website" />        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/LOGO.jpg" />
      </Head>
    <Hero/>
    
    <ContactForm/>
    <Details/>
   </>
  )
}

export default contact