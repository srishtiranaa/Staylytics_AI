import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <section
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
    gap: "20px",
    padding: "40px",
    textAlign: "center",
  }}
>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <h3 className="text-3xl font-bold">10K+</h3>
            <p className="text-gray-500">Reviews Analyzed</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold">95%</h3>
            <p className="text-gray-500">Sentiment Accuracy</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold">500+</h3>
            <p className="text-gray-500">Properties</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold">24/7</h3>
            <p className="text-gray-500">AI Insights</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-center mb-10">
          Core Features
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <Card
            title="📊 Sentiment Analysis"
            description="Detect positive, negative and neutral feedback instantly."
          />

          <Card
            title="🤖 AI Summaries"
            description="Generate concise summaries from hundreds of reviews."
          />

          <Card
            title="💡 Smart Recommendations"
            description="Receive actionable suggestions powered by AI."
          />
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-8">
          Dashboard Preview
        </h2>

        <div className="border rounded-3xl p-8 shadow-lg">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-4 border rounded-xl">
              <h3 className="text-gray-600">Overall Rating</h3>
              <p className="text-4xl font-bold mt-2">4.8 ⭐</p>
            </div>

            <div className="p-4 border rounded-xl">
              <h3 className="text-gray-600">Positive Reviews</h3>
              <p className="text-4xl font-bold mt-2">82%</p>
            </div>

            <div className="p-4 border rounded-xl">
              <h3 className="text-gray-600">Issues Detected</h3>
              <p className="text-4xl font-bold mt-2">18%</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold mb-8">
          What Property Owners Say
        </h2>

        <div className="border rounded-2xl p-8 shadow-md">
          <p className="text-lg italic text-gray-600">
            "Staylytics AI helped us identify recurring guest complaints and
            improve our ratings within weeks."
          </p>

          <h4 className="font-semibold mt-4">
            — Sarah Johnson, Homestay Owner
          </h4>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;