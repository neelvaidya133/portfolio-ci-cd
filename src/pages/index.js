import Head from "next/head";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import BottomNavbar from "@/components/Navbar";
import Layout from "@/components/Layout";
import Journey from "@/components/Journey";
import SkillsCertifications from "@/components/Skills";
import FixedIcons from "@/components/FixedIcons";

export default function Home() {
  return (
    <>
      <Head>
        <title>Neel Vaidya</title>
        <meta name="description" content="Welcome to my portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Hero />
        <About />
        <Projects />
        <SkillsCertifications />
        <Journey />

        <Contact />
        <FixedIcons />
        <BottomNavbar />
      </Layout>
    </>
  );
}
