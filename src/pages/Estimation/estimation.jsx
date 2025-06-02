import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "../../components/Navbar";
import Footer from "../../components/footer";
import EstimationPage from "../../components/estimationRevenue";

const Estimation = () => {
  return (
    <>
      <Helmet>
        <title>Estimation des Revenus Airbnb | Conciergerie Nice</title>
        <meta
          name="description"
          content="Estimez vos revenus locatifs Airbnb en quelques clics grâce à notre outil gratuit. Rapide, fiable et personnalisé pour votre bien immobilier."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://votre-site.com/obtenirUneEstimation"
        />
      </Helmet>
      <Navbar />
      <main className="min-h-screen bg-gray-50 py-8 px-4 md:px-8 lg:px-12 flex items-center justify-center">
        <section className="max-w-4xl mx-auto w-full">
          <EstimationPage />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Estimation;
