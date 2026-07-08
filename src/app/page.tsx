import {
  Navbar,
  Hero,
  About,
  Services,
  Skills,
  Experience,
  Awards,
  Projects,
  Contact,
  Footer,
} from "@/components";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Skills />
      <Experience />
      <Awards />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
