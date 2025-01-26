import Head from "next/head";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import BottomNavbar from "@/components/Navbar";
import Layout from "@/components/Layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Welcome to my portfolio website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Header />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <BottomNavbar />
      </Layout>
    </>
  );
}
