import HeroBanner from "@/components/HeroBanner/HeroBanner";
import Headingwithbutton from "@/components/Headingwithbutton/headingwithbutton";
import "./Home.scss";
import "./variables.scss";

export default function Home() {
  return (
    <main className="main">
      <HeroBanner />
      <Headingwithbutton />
    </main>
  );
}
