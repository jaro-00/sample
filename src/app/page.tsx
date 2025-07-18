import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";
import Sidebar from "./components/sidebar";
export default function Home() {
  return (
    <main>
      <Sidebar />
      <Hero />
      <About />
      <Footer />
    </main>
  );
}
