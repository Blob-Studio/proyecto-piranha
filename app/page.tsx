import Navbar from "./components/common/Navbar";
import Hero from "./components/Home/Hero";
import Kiosko from "./components/Home/Kiosko";
import Shop from "./components/Home/Shop";

export default function Home() {
  return (
    <div className="w-full flex h-[100dvh]">
      <aside className="h-full w-2/12 fixed z-10 bg-[rgba(0,0,0,0.1)] backdrop-blur-xl">
        <Navbar />
      </aside>
      <main className="max-h-[100dvh] w-full overflow-y-scroll">
        <Hero />
        <div className="w-10/12 ml-auto">
          <Kiosko />
          <Shop />
        </div>
      </main>
    </div>
  );
}
