import Image from "next/image";

import Hero from "../../components/Hero";
import SponsorBar from "../../components/SponsorBar";
import Featured from "../../components/Featured";

export default function Home() {
  return (
    <div>
      <Hero />
      <SponsorBar />
      <Featured />
    </div>
  );
}
