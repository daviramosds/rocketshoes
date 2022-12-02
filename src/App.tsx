import { Header, Footer } from "./components";
import Tenis1Ampliado from "./assets/tenis-1-ampliado.png";
import Tenis1Galeria from "./assets/tenis-1-galeria.png";
import Tenis2Galeria from "./assets/tenis-2-galeria.png";
import Tenis3Galeria from "./assets/tenis-3-galeria.png";

function App() {
  return (
    <>
      <Header />
      <main className="flex">
        <section className="px-28 py-48 flex flex-col justify-between">
          <h1 className="font-bold text-6xl leading-tight">
            Tênis Esportivo Para Corrida Top
          </h1>
          <p className="text-[#9C9696] font-bold text-base relative bottom-3">
            Esse tênis tem o intuito de te deixar ainda mais fitness, focado, e
            musculoso.
          </p>
          <h1 className="font-bold text-4xl ">R$ 1.000,00</h1>
          <button className="w-full bg-[#FF0000] py-6 font-bold text-white">
            COMPRAR
          </button>
        </section>
        <section className="w-[150%] h-[83vh] bg-[#C4C4C4] flex flex-col justify-center items-center">
          <img src={Tenis1Ampliado} className="w-[600px]" />
          <div className="w-full h-20 flex justify-between px-8">
            <img src={Tenis1Galeria} className="h-44 " />
            <img
              src={Tenis2Galeria}
              className="h-44 border-b-4 border-[#F00]"
            />
            <img src={Tenis3Galeria} className="h-44 " />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
