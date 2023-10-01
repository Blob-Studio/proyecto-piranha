import Navbar from "./components/common/Navbar";
import Hero from "./components/Home/Hero";
import Kiosko from "./components/Home/Kiosko";
import Shop from "./components/Home/Shop";

export default function Home() {
  return (
    <div className="w-full flex h-[100dvh]">
      <aside className="h-full w-2/12">
        <Navbar />
      </aside>
      <main className="max-h-[100dvh] w-10/12 overflow-y-scroll">
        <Hero />
        <Kiosko />
        <Shop />
      </main>
    </div>
  );
}
