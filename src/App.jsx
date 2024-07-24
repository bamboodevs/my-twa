import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import XGPlan from "./components/XGPlan";
import Pool from "./components/Pool";
import Faq from "./components/Faq";
import Roadmap from "./components/Roadmap";
import StageNovice from "./components/StageNovice";
import StageInitiate from "./components/StageInitiate";
import StageApprentice from "./components/StageApprentice";
import StageAdept from "./components/StageAdept";
import StageExpert from "./components/StageExpert";
import StageMaster from "./components/StageMaster";
import StageGrandmaster from "./components/StageGrandmaster";
import StageFree from "./components/StageFree";
import UserProfile from "./components/UserProfile";
import TransactionsList from "./components/TransactionsList";
import MessagesList from "./components/MessagesList";
import StickyMenu from "./components/StickyMenu";

function App() {
  return (
    <div className="App">
      <Header />
      <StickyMenu />
      <main id="main-content">
        <Routes>
          <Route path="/stages/novice" element={<StageNovice />} />
          <Route path="/stages/initiate" element={<StageInitiate />} />
          <Route path="/stages/apprentice" element={<StageApprentice />} />
          <Route path="/stages/adept" element={<StageAdept />} />
          <Route path="/stages/expert" element={<StageExpert />} />
          <Route path="/stages/master" element={<StageMaster />} />
          <Route path="/stages/grandmaster" element={<StageGrandmaster />} />
          <Route path="/stages/free" element={<StageFree />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/xg-plan" element={<XGPlan />} />
          <Route path="/pool" element={<Pool />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/transactions/list" element={<TransactionsList />} />
          <Route path="/messages/list" element={<MessagesList />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
