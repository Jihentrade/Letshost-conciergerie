import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/footer";
import EstimationPage from "../../components/estimationRevenue";

const Estimation = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 py-8">
        <EstimationPage />
      </main>
      <Footer />
    </>
  );
};

export default Estimation;
