function Hero() {
  return (
    <section
      style={{
        textAlign: "center",
        padding: "80px 20px",
        background: "linear-gradient(135deg, #f5f7ff, #eef2ff)",
      }}
    >
      <p
        style={{
          color: "#6366f1",
          fontWeight: "600",
          marginBottom: "15px",
          fontSize: "0.95rem",
        }}
      >
        AI Powered Hospitality Analytics
      </p>

      <h1
        style={{
          fontSize: "2.5rem",
          fontWeight: "700",
          lineHeight: "1.2",
          marginBottom: "20px",
          maxWidth: "900px",
          margin: "0 auto 20px",
        }}
      >
        Transform Guest Reviews Into
        <br />
        AI-Powered Business Growth
      </h1>

      <p
        style={{
          fontSize: "1.1rem",
          color: "#555",
          maxWidth: "700px",
          margin: "0 auto 30px",
          lineHeight: "1.6",
        }}
      >
        Analyze feedback, discover trends, and improve guest experiences
        using AI-powered insights and intelligent review analytics.
      </p>

      <div>
        <button
          style={{
            padding: "12px 24px",
            marginRight: "12px",
            border: "none",
            borderRadius: "8px",
            backgroundColor: "#4f46e5",
            color: "white",
            cursor: "pointer",
            fontWeight: "600",
          }}
        >
          Get Started
        </button>

        <button
          style={{
            padding: "12px 24px",
            border: "1px solid #d1d5db",
            borderRadius: "8px",
            backgroundColor: "white",
            cursor: "pointer",
            fontWeight: "600",
          }}
        >
          Learn More
        </button>
      </div>
    </section>
  );
}

export default Hero;