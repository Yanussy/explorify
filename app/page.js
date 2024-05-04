import Image from "next/image";
import Navbar from "./mainComponents/navbar.js";
import Info from "./mainComponents/info.js";
import Assets from "./mainComponents/assets.js";
import Credits from "./mainComponents/credits.js";
export default function Home() {
  return (
    <main>
      <Navbar />
      <Info />
      <Assets />
      <Credits />
    </main>
  );
}
