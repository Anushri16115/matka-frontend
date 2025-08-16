// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Games from "./pages/Games";
import LiveResultsPage from "./pages/LiveResults";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./ScrollToTop";
import "./styles/globals.css";

// Weekly Charts Pages
import WeeklyPanelChart from "./pages/WeeklyPanelChart";
import WeeklyPattiChart from "./pages/WeeklyPattiChart";
import WeeklyJodiChart from "./pages/WeeklyJodiChart";
import OpenToCloseChart from "./pages/OpenToCloseChart";

// Game Specific Charts
import GameJodiChart from "./pages/GameJodiChart";
import GamePanelChart from "./pages/GamePanelChart";

// Member Forum Pages
import GuessingForumPage from "./pages/GuessingForumPage";
import OnlinePlayPage from "./pages/OnlinePlayPage";
import DailyNumbersPage from "./pages/DailyNumbersPage";
import Satta220PattiChart from "./pages/Satta220PattiChart";
import WeeklyJodiPannaPage from "./pages/WeeklyJodiPannaPage";
import ChartsPage from "./pages/ChartsPage";
import SattaMatkaJodiChartRecords from "./pages/SattaMatkaJodiChartRecords";
import SattaMatkaPanelChartRecords from "./pages/SattaMatkaPanelChartRecords";
import OtherMatkaJodiChartRecords from "./pages/OtherMatkaJodiChartRecords";
import OtherMatkaPanelChartRecords from "./pages/OtherMatkaPanelChartRecords";
 // ✅ newly added

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Header />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/games" element={<Games />} />
            <Route path="/results" element={<LiveResultsPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* Weekly Charts Routes */}
            <Route path="/charts/weekly-panel" element={<WeeklyPanelChart />} />
            <Route path="/charts/weekly-patti" element={<WeeklyPattiChart />} />
            <Route
              path="/charts/open-to-close"
              element={<OpenToCloseChart />}
            />
            <Route path="/charts/weekly-jodi" element={<WeeklyJodiChart />} />
            <Route path="/charts" element={<ChartsPage />} />


            {/* Game Specific Chart Routes */}
            <Route path="/charts/jodi/:gameId" element={<GameJodiChart />} />
            <Route path="/charts/panel/:gameId" element={<GamePanelChart />} />

            {/* Member Forum Routes */}
            <Route path="/forum" element={<GuessingForumPage />} />
            <Route path="/online-play" element={<OnlinePlayPage />} />
            <Route path="/daily-numbers" element={<DailyNumbersPage />} />
            <Route
              path="/satta-220-patti-chart"
              element={<Satta220PattiChart />}
            />
            <Route
              path="/weekly-jodi-panna"
              element={<WeeklyJodiPannaPage />}
            />

            {/* Chart Records Routes */}
            <Route
              path="/satta-matka-jodi-chart-records"
              element={<SattaMatkaJodiChartRecords />}
            />
            <Route
              path="/satta-matka-panel-chart-records"
              element={<SattaMatkaPanelChartRecords />}
            />
            <Route
              path="/other-matka-jodi-chart-records"
              element={<OtherMatkaJodiChartRecords />}
            />
            <Route
              path="/other-matka-panel-chart-records"
              element={<OtherMatkaPanelChartRecords />}
            />

            {/* Catch-all for unknown routes */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
