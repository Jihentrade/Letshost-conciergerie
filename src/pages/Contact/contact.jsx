import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/footer";

const ContactPage = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Contactez-nous
          </h2>

          {/* Bouton WhatsApp */}
          <div className="mb-8">
            <a
              href="https://wa.me/0021699616660?text=Bonjour%2C%20je%20souhaite%20obtenir%20plus%20d'informations"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-green-500 text-white text-lg font-medium rounded-md shadow hover:bg-green-600 transition duration-300"
            >
              <svg
                className="w-6 h-6 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.52 3.48A11.91 11.91 0 0012 0C5.37 0 0 5.37 0 12a11.94 11.94 0 001.64 6.03L0 24l6.09-1.6A11.94 11.94 0 0012 24c6.63 0 12-5.37 12-12 0-3.19-1.25-6.19-3.48-8.52zM12 22c-1.85 0-3.63-.5-5.2-1.45l-.37-.22-3.62.95.97-3.53-.24-.38A9.94 9.94 0 012 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.27-7.73l-1.6-.8c-.22-.11-.47-.05-.64.13l-.8.98a.5.5 0 01-.64.13c-1.1-.55-2.01-1.46-2.56-2.56a.5.5 0 01.13-.64l.98-.8c.18-.17.24-.42.13-.64l-.8-1.6a.5.5 0 00-.64-.22c-.9.37-1.9.58-2.9.58-.28 0-.5.22-.5.5 0 3.87 3.13 7 7 7 .28 0 .5-.22.5-.5 0-1-.2-2-.58-2.9a.5.5 0 00-.22-.64z" />
              </svg>
              Contactez-nous sur WhatsApp
            </a>
          </div>

          {/* Formulaire de contact */}
          <form className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Nom
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white text-lg font-medium rounded-md shadow hover:bg-blue-700 transition duration-300"
              >
                Envoyer le message
              </button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ContactPage;
