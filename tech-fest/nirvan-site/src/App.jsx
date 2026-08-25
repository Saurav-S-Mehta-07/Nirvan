import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Events from "./pages/Events";
import EventDetail from "./pages/EventDetail";
import Schedule from "./pages/Schedule";
import Speakers from "./pages/Speakers";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <div className="flex min-h-screen bg-void">
      {/* Fixed sidebar */}
      <Sidebar />

      {/* Main content area — offset by sidebar width on desktop */}
      <main className="flex-1 lg:ml-[var(--sidebar-width)] pt-16 lg:pt-0">
        <div className="min-h-screen flex flex-col">
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/about"
                element={<About />}
              />
              <Route
                path="/events"
                element={<Events />}
              />
              <Route
                path="/events/:slug"
                element={<EventDetail />}
              />
              <Route
                path="/schedule"
                element={<Schedule />}
              />
              <Route
                path="/speakers"
                element={<Speakers />}
              />
              <Route
                path="/gallery"
                element={<Gallery />}
              />
              <Route
                path="/contact"
                element={<Contact />}
              />
            </Routes>
          </div>
          <Footer />
        </div>
      </main>
    </div>
  );
}
