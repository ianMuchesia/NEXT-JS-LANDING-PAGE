import Head from "next/head";

import styles from "@/styles/Home.module.css";
import Hero from "../../components/HomeComponents/Hero";
import Feature from "../../components/HomeComponents/Feature";

import AboutUs from "../../components/HomeComponents/AboutUs";
import Portfolio from "../../components/HomeComponents/Portfolio";
import Testimonials from "../../components/HomeComponents/Testimonials";
import Team from "../../components/HomeComponents/Team";
import ContactUs from "../../components/HomeComponents/ContactUs";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Care Services and Consultant LTD - Discover The World Of Business
        </title>
        <meta
          name="description"
          content="Discover The World Of Business with Care Services and Consultant LTD."
        />
        <link rel="icon" href="/favicon.jpg" type="image/jpeg" />
        <link rel="icon" href="/LOGO.jpg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
       
      </Head>
      <main className={styles.main}>
        <Hero />
        <Feature />
        <AboutUs />
        <Portfolio />
        <Testimonials />
        <Team />
        <ContactUs />
      </main>
    </>
  );
}
