import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Dashboard() {
  return (
    <>
      <Navbar />

      <main style={{ padding: "20px" }}>
        <h1>Dashboard</h1>

        <p>
          Analytics, reports, and review insights will be displayed here.
        </p>
      </main>

      <Footer />
    </>
  );
}

export default Dashboard;