import React from "react";
import MarqueeBar from "../components/MarqueeBar";
import Hero from "../components/Hero";
import LiveResults from "../components/LiveResults";
import GameResultsGrid from "../components/GameResultsGrid";
import MembersForum from "../components/MembersForum";
import WeeklyCharts from "../components/WeeklyCharts";
import FreeGameZone from "../components/FreeGameZone";
import ChartRecords from "../components/ChartRecords";
import FAQSection from "../components/FAQSection";
import AajKyaPassHua from "../components/AajKyaPassHua"; // adjust path if needed
import TopGuessersAndResultKing from "../components/TopGuessersAndResultKing";

const Home: React.FC = () => {
  return (
    <>
      <MarqueeBar />
      <Hero />
      <LiveResults />
      <GameResultsGrid />
      <MembersForum />
      <WeeklyCharts />
      <FreeGameZone />
      <AajKyaPassHua />
      <TopGuessersAndResultKing />
      <ChartRecords />
      <FAQSection />
    </>
  );
};

export default Home;
