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
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    console.log(
      `%c🚀 Welcome, Curious Developer! 🚀
      
    %c👀 Looks like you're exploring the console! 
    ✨ If you’re interested in the tech behind this website, let’s connect!
    
    📄 Resume: https://neelvaidya.com/Neel-resume.pdf
    🌐 GitHub: https://github.com/neelvaidya133
    🔗 LinkedIn: https://linkedin.com/in/neelvaidya133
    📧 Email: neelvaidya133@gmail.com
    
    %cHappy Coding! 💻
      `,
      "color: #ff9800; font-size: 20px; font-weight: bold;",
      "color: #03a9f4; font-size: 16px;",
      "color: #4caf50; font-size: 14px; font-style: italic;"
    );
  }, []);

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
