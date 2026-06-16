import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "20px",
          padding: "20px",
        }}
      >
        <Card
          title="Sentiment Analysis"
          description="Analyze guest emotions from reviews."
        />

        <Card
          title="Review Summaries"
          description="Generate concise summaries from reviews."
        />

        <Card
          title="Business Insights"
          description="Discover trends and actionable recommendations."
        />
      </div>

      <Footer />
    </>
  );
}

export default Home;