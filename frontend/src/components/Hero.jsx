function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-purple-50 py-24 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <span className="px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm">
          AI Powered Hospitality Analytics
        </span>

        <h1 className="text-5xl md:text-7xl font-bold mt-6">
          Transform Guest Reviews Into
          <span className="block text-blue-600">
            AI-Powered Business Growth
          </span>
        </h1>

        <p className="mt-6 text-gray-600 text-lg max-w-2xl mx-auto">
          Analyze feedback, discover trends, and improve guest experiences
          using AI-driven insights.
        </p>

        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <button className="px-6 py-3 rounded-xl bg-black text-white">
            Get Started
          </button>

          <button className="px-6 py-3 rounded-xl border">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;