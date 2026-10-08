import {
  Navbar,
  Hero,
  Stats,
  Projects,
  Services,
  Skills,
  Experience,
  About,
  Faq,
  Contact,
  Footer,
} from "@/components";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      <Projects />
      <Services />
      <Skills />
      <Experience />
      <About />
      <Faq />
      <Contact />
      <Footer />
    </main>
  );
}
