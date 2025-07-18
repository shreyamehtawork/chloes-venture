import react from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
// import FeaturedCollections from "../components/FeaturedCollection";
// import FoundersNote from "../components/FoundersNote";
// import GrainyBackground from "../styles/GrainyBg/GrainyBg";
import EditorsPicks from "../components/EditorsPicks";
import FoundersNote from "../components/FoundersNote";

function Home() {
  return (
    <div>
      <Hero />
      {/* <GrainyBackground> */}
      <Categories />
      <EditorsPicks />
      <FoundersNote />
      {/* </GrainyBackground> */}
    </div>
  );
}

export default Home;
