import React from "react";
import Hero from "../../components/AboutComponents/Hero";
import Mission from "../../components/AboutComponents/Mission";
import Choose from "../../components/AboutComponents/Choose";
import Plan from "../../components/AboutComponents/Plan";
import Head from "next/head";

const About = () => {
  return (
    <>
      <Head>
        <title>About Us - Care Services</title>
        <meta
          name="description"
          content="Learn about Care Services - Our mission is to empower individuals and businesses."
        />
        <meta property="og:title" content="About Us - Care Services" />
        <meta
          property="og:description"
          content="Learn about Care Services - Our mission is to empower individuals and businesses!"
        />
        <meta
          property="og:url"
          content="https://careservicesandconsultantltd.com/about"
        />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/LOGO.jpg" />
      </Head>
      <Hero />
      <Mission />
      <Choose />
      <Plan />
    </>
  );
};

export default About;
