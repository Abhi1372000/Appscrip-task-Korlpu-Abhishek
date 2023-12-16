import styles from "./page.module.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Filterbar from "./components/Filterbar/Filterbar";
import Main from "./components/Main";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Filterbar />
      <Main />
      <Footer />
    </main>
  );
}
