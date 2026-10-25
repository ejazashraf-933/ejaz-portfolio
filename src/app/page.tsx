import { Navbar, Hero, Projects, Services, Experience, About, Faq, Contact, Footer } from "@/components";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Projects />
      <Services />
      <Experience />
      <About />
      <Faq />
      <Contact />
      <Footer />
    </main>
  );
}
