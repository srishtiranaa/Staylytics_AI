import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <Navbar />

      <main style={{ padding: "20px" }}>
        <h1>About</h1>

        <p>
          Staylytics AI helps homestay owners analyze guest reviews and gain valuable insights.
        </p>
      </main>

      <Footer />
    </>
  );
}

export default About;