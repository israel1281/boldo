import Blog from "./components/Blog";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Header from "./components/Header";
import News from "./components/News";
import styles from "./Home.module.css"

export default function Home() {
  return (
    <main className={styles.home_container}>
      <Header />
      <Blog />
      <News />
      <ContactUs />
      <Footer />
    </main>
  );
}
