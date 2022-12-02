import { Header, Footer } from "./components";



function App() {
  return (
    <>
      <Header />
      <main className="flex">
        <section className="px-32 py-48 flex items-center flex-col justify-between">
          <h1 className="font-bold text-5xl leading-tight">
            Tênis Esportivo Para Corrida Top
          </h1>
          <p className="text-[#9C9696] font-bold">
            Esse tênis tem o intuito de te deixar ainda mais fitness, focado, e
            musculoso.
          </p>
          <h1 className="font-bold text-5xl ">R$ 1.000,00</h1>
          <button className="w-full bg-[#FF0000] py-6 font-bold text-white">
            COMPRAR
          </button>
        </section>
        <section className="w-[150%] h-[83vh] bg-[#C4C4C4]">
          <img />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
