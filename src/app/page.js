// File: pages/index.js
import React from "react";
import Image from "next/image";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-800 to-black text-white font-sans">
      <section className="container mx-auto px-4 py-16 text-center flex flex-col items-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Supporta le Modifiche delle 500 Abarth degli Alessandri 🖤💙</h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl">
          Due 500 Abarth stanno per diventare qualcosa di unico. Con il tuo aiuto, possiamo
          trasformarle completamente e portare avanti il nostro progetto di beneficenza.
        </p>
        <a href="#progress" className="text-lg px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-800 to-black text-white hover:from-blue-400 hover:to-gray-800 transition">
          Dona Ora
        </a>
      </section>

      <section className="bg-white text-black py-16 px-4">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <Image
            src="/abarth-ale.jpeg"
            alt="500 Abarth"
            width={600}
            height={400}
            className="rounded-2xl shadow-lg"
          />
          <div>
            <h2 className="text-3xl font-bold mb-4">Un Progetto con il Cuore</h2>
            <p className="text-lg">
              Le modifiche delle due auto saranno documentate passo dopo passo. Ogni donazione
              contribuisce direttamente alla trasformazione e al supporto di cause benefiche
              locali. Rendi parte di questa avventura indimenticabile.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white text-black py-16 px-4">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Aiutateci PLS!!!</h2>
            <p className="text-lg">
              Guardate quanto sono belline!! 😍
            </p>
          </div>
          <Image
            src="/abarth-mia.jpeg"
            alt="500 Abarth Custom"
            width={600}
            height={400}
            className="rounded-2xl shadow-lg"
          />
        </div>
      </section>

      <section className="bg-black text-white py-16 px-4" id="progress">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl md:text-4xl font-bold mb-6">Nuovo Account OF 🩵🤍</h3>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            La nostra idea era quella di aprire un canale OF e condividere materiale non esplicito,
            ma semplici: ascelle, piedi, vendità di calzini usati, una tetta (?).
            Donazioni di foto esclusivamente da parte delle nostre compagne.
            Dareste un grande supporto al progetto. 🩵🤍<br /><br />
            Soldi facili e legali! 🤑💰
          </p>
          <button className="bg-blue-800 text-white px-6 py-3 text-lg rounded-2xl hover:bg-blue-700">
            Resta Aggiornato
          </button>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-400 py-6 text-center text-sm">
        © 2025 Progetto 500 Abarth | Powered by Next.js & Vercel
      </footer>
    </main>
  );
}